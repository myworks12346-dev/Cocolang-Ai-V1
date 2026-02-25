import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-16 relative overflow-hidden glow-border"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-start/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-end/20 blur-[100px] rounded-full" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Start Building on <br />
            <span className="gradient-text">MOI Today</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Join the next generation of blockchain developers. Create secure, efficient, and innovative smart contracts with the power of AI.
          </p>

          <button 
            onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary mx-auto"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
