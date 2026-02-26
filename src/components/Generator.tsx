import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Copy, Download, Check, Loader2, ShieldAlert, Bug, ShieldCheck, AlertTriangle, Info } from "lucide-react";
import { generateContractStream, auditContract } from "../lib/gemini";
import { useToast } from "./Toast";

interface AuditReport {
  score: number;
  summary: string;
  issues: {
    type: 'security' | 'syntax' | 'logic';
    severity: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    suggestion: string;
  }[];
}

export default function Generator() {
  const { showToast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditReport, setAuditReport] = useState<AuditReport | null>(null);
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSetPrompt = (e: CustomEvent) => {
      setPrompt(e.detail);
      setAuditReport(null);
      setCode("");
      setTimeout(() => {
        document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    };

    window.addEventListener('set-generator-prompt' as any, handleSetPrompt as any);
    return () => window.removeEventListener('set-generator-prompt' as any, handleSetPrompt as any);
  }, []);

  const cleanCode = (text: string) => {
    return text.replace(/```cocolang\n?|```\n?|```/g, '').trim();
  };

  const highlightCode = (code: string) => {
    if (!code) return "";
    
    // Simple regex-based highlighter for Cocolang
    return code
      .replace(/\/\/.*/g, '<span class="token-comment">$&</span>')
      .replace(/\b(contract|state|constructor|function|require|assert|if|else|return|for|while|in)\b/g, '<span class="token-keyword">$1</span>')
      .replace(/\b(Address|Uint64|Int64|String|Bool|Map|List|Bytes)\b/g, '<span class="token-type">$1</span>')
      .replace(/"[^"]*"/g, '<span class="token-string">$&</span>')
      .replace(/\b(\d+)\b/g, '<span class="token-type">$1</span>')
      .replace(/[+\-*/=<>!&|]+/g, '<span class="token-operator">$&</span>');
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setAuditReport(null);
    setCode("");
    
    try {
      const stream = generateContractStream(prompt);
      let firstChunk = true;
      
      for await (const fullText of stream) {
        if (firstChunk) {
          setTimeout(() => {
            outputRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          firstChunk = false;
        }
        setCode(cleanCode(fullText));
      }
      showToast("Contract generated successfully!", "success");
    } catch (error: any) {
      console.error("Generation failed:", error);
      const msg = error.message || "Failed to generate contract. Please check your connection.";
      showToast(msg, "error");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAudit = async () => {
    if (!code) return;
    setIsAuditing(true);
    try {
      const report = await auditContract(code);
      setAuditReport(report);
      showToast("Audit complete. Review the findings below.", "info");
      setTimeout(() => {
        auditRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error("Audit failed:", error);
      showToast("Audit failed. Please try again.", "error");
    } finally {
      setIsAuditing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contract.coco';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("Downloading contract.coco", "info");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <section id="generator" className="py-24 px-6 relative section-anchor">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-start/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-end/10 blur-[100px] -z-10" />

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="text-primary-end" />
              Contract Generator
            </h2>
            <p className="text-gray-400">
              Describe your contract logic in natural language. Our AI will handle the Cocolang syntax.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a trust-based peer-to-peer lending contract with interest rates and collateral management..."
                className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-start/50 transition-all resize-none text-lg"
              />
              <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                Powered by Gemini 3 Flash
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="btn-primary w-full py-5 text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="animate-spin" />
                  Architecting Contract...
                </>
              ) : (
                <>
                  <Sparkles className="group-hover:animate-pulse" />
                  Generate Cocolang Code
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {code && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-12"
                ref={outputRef}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-gray-300">Generated Code</h3>
                  <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleAudit}
                      disabled={isAuditing}
                      className="flex-1 sm:flex-none p-2 bg-primary-start/10 hover:bg-primary-start/20 border border-primary-start/30 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm text-primary-end font-semibold"
                    >
                      {isAuditing ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldAlert className="w-4 h-4" />}
                      Audit & Debug
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex-1 sm:flex-none p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? "Copied!" : "Copy"}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex-1 sm:flex-none p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-primary-start/20 to-primary-end/20 rounded-xl blur opacity-50" />
                  <pre className="relative w-full overflow-x-auto bg-[#050508] border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed text-gray-300 max-h-[600px] custom-scrollbar">
                    <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
                  </pre>
                </div>

                {/* Audit Report Section */}
                <AnimatePresence>
                  {auditReport && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-12 pt-12 border-t border-white/10"
                      ref={auditRef}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                            <ShieldCheck className="text-green-400" />
                            Security & Debug Audit
                          </h3>
                          <p className="text-gray-400">{auditReport.summary}</p>
                        </div>
                        <div className="text-left md:text-right w-full md:w-auto p-4 md:p-0 bg-white/5 md:bg-transparent rounded-xl">
                          <div className="text-sm text-gray-500 uppercase tracking-widest mb-1">Safety Score</div>
                          <div className={`text-4xl font-bold ${auditReport.score > 80 ? 'text-green-400' : auditReport.score > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {auditReport.score}%
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-4">
                        {auditReport.issues.map((issue, idx) => (
                          <div key={idx} className={`p-6 rounded-xl border ${getSeverityColor(issue.severity)}`}>
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                {issue.type === 'security' ? <ShieldAlert className="w-5 h-5" /> : issue.type === 'syntax' ? <Bug className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                                <span className="font-bold uppercase text-xs tracking-wider px-2 py-1 rounded bg-black/20">
                                  {issue.type}
                                </span>
                                <h4 className="text-lg font-bold">{issue.title}</h4>
                              </div>
                              <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                                {issue.severity} severity
                              </span>
                            </div>
                            <p className="text-sm opacity-80 mb-4">{issue.description}</p>
                            <div className="bg-black/20 p-4 rounded-lg flex items-start gap-3">
                              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                              <div>
                                <div className="text-xs font-bold uppercase mb-1 opacity-60">Recommendation</div>
                                <p className="text-sm">{issue.suggestion}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                        {auditReport.issues.length === 0 && (
                          <div className="p-12 text-center glass-card border-green-400/20">
                            <ShieldCheck className="w-12 h-12 text-green-400 mx-auto mb-4" />
                            <h4 className="text-xl font-bold mb-2">No Issues Found</h4>
                            <p className="text-gray-400">Your contract follows MOI best practices and security standards.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
