import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export default function DeveloperCredit() {
  return (
    <section className="py-12 px-6 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-start/5 to-primary-end/5 opacity-50" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col">
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Architected & Developed by</span>
            <span className="text-2xl font-bold tracking-tight text-white">
              M.<span className="gradient-text">Naresh</span>
            </span>
          </div>
        </motion.div>
        
        <div className="hidden sm:block w-px h-10 bg-white/10" />
        
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/naresh-kumar7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all font-bold shadow-lg shadow-[#0077b5]/5"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </motion.a>
      </div>
    </section>
  );
}
