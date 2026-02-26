import { motion } from "motion/react";
import { Shield, Zap, Target, Users, Rocket, Brain } from "lucide-react";

export default function WhyCocolang() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Why <span className="gradient-text">Cocolang AI Copilot?</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Building on MOI should feel powerful — not confusing. 
            We're removing the friction between your ideas and production-ready code.
          </p>
        </motion.div>

        {/* Exists Section */}
        <section className="mb-24">
          <div className="glass-card p-10 glow-border">
            <h2 className="text-3xl font-bold mb-6">Why Cocolang AI Copilot Exists</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Smart contracts are the backbone of blockchain innovation. 
              But writing them manually is slow, error-prone, and intimidating — especially when working with a specialized language like Cocolang.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Cocolang AI Copilot removes that friction. It transforms plain English into secure, structured, production-ready Cocolang contracts — instantly.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">The Problem We’re Solving</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 border-red-500/10">
              <h3 className="text-xl font-bold mb-4 text-red-400">The Struggle</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  Learning Cocolang syntax from scratch
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  Remembering contract structure
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  Implementing secure validation logic
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  Avoiding silent vulnerabilities
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 border-orange-500/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">The Generic AI Gap</h3>
              <p className="text-gray-400 text-sm mb-4">
                Generic tools mix patterns from other chains, producing inconsistent outputs and incomplete snippets.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  Broken contracts
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  Security gaps
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                  Reduced developer confidence
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-24">
          <div className="glass-card p-10 bg-gradient-to-br from-primary-start/5 to-primary-end/5 border-primary-start/20">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Cocolang AI Copilot is a purpose-built AI assistant designed specifically for the MOI ecosystem.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Follows proper Cocolang structure",
                "Includes state declarations",
                "Adds constructor logic",
                "Implements require/assert validation",
                "Uses consistent formatting",
                "Returns clean deploy-ready code"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <Zap className="w-4 h-4 text-primary-end" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Better Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Why It’s Better Than Generic AI</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary-start/20 flex items-center justify-center shrink-0">
                <Brain className="text-primary-start" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">1. Domain-Specific Intelligence</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cocolang AI Copilot is constrained and optimized for MOI architecture. It doesn’t guess, mix ecosystems, or hallucinate irrelevant syntax. It generates contracts the way MOI expects them.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <Shield className="text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2. Secure by Default</h3>
                <p className="text-gray-400 leading-relaxed">
                  Security patterns are built into the generation logic. Validation checks, assertion conditions, and logical safeguards are not optional — they are always included.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                <Target className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">3. Workflow-Native Experience</h3>
                <p className="text-gray-400 leading-relaxed">
                  Instead of copy-pasting from a chat interface, you get a focused contract generation interface with structured code output and downloadable .coco files.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                <Users className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">4. Faster Developer Onboarding</h3>
                <p className="text-gray-400 leading-relaxed">
                  Web2 developers entering MOI don’t need to master syntax immediately. They describe logic, the AI handles structure, accelerating ecosystem growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Builders Section */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-10">Built for Builders</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hackathon Participants", "Startup Founders", "Smart Contract Developers", "Web2 Engineers"].map((tag, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-24">
          <div className="glass-card p-10 border-primary-end/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-end/10 blur-3xl" />
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Rocket className="text-primary-end" />
              The Bigger Vision
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Cocolang AI Copilot is more than a generator. It is the foundation for AI-native blockchain development, faster MOI adoption, and safer contract standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">AI-native development</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">Faster MOI adoption</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">Safer contract standards</div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">Developer productivity</div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Start Building Smarter</h2>
          <p className="text-gray-400 mb-10">Less syntax struggle. More logic innovation. Faster deployment cycles.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="btn-primary mx-auto"
          >
            Back to Generator
          </button>
        </motion.div>
      </div>
    </div>
  );
}
