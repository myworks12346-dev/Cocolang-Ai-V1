import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToGenerator = () => {
    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewExample = () => {
    const examplePrompt = "Create a decentralized identity (DID) registry contract where users can register their public keys, update their metadata, and allow authorized third parties to verify their identity status. Include logic for revoking identities.";
    window.dispatchEvent(new CustomEvent('set-generator-prompt', { detail: examplePrompt }));
  };

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-start/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-end animate-ping" />
            <span className="text-sm font-medium text-gray-300">The Vibe Coder Assistant for MOI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Generate MOI <br />
            <span className="gradient-text">Cocolang Contracts</span> <br />
            Instantly
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Describe your logic. Get production-ready blockchain code in seconds. 
            The most advanced AI assistant for the MOI ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToGenerator} className="btn-primary w-full sm:w-auto">
              Generate Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={viewExample} className="btn-secondary w-full sm:w-auto">
              <Play className="w-4 h-4 fill-current" />
              View Example
            </button>
            <Link to="/why" className="btn-secondary w-full sm:w-auto border-primary-start/30 hover:border-primary-start/60">
              Why Cocolang?
            </Link>
          </div>
        </motion.div>

        {/* Abstract Floating Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-10 bg-gradient-to-r from-primary-start to-primary-end opacity-20 blur-[60px] rounded-full" />
            <div className="glass-card p-4 md:p-8 border-white/20 relative">
              <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-gray-500 font-mono">moi_contract.coco</div>
              </div>
              <div className="text-left font-mono text-sm text-gray-400 space-y-1">
                <p><span className="text-primary-end">contract</span> PeerToPeerLending {"{"}</p>
                <p className="pl-4"><span className="text-purple-400">state</span> {"{"}</p>
                <p className="pl-8">lenders: <span className="text-blue-400">Map</span>&lt;Address, Lender&gt;;</p>
                <p className="pl-8">loans: <span className="text-blue-400">List</span>&lt;Loan&gt;;</p>
                <p className="pl-4">{"}"}</p>
                <p className="pl-4">...</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
