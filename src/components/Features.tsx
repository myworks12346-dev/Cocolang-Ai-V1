import { motion } from "motion/react";
import { Cpu, Shield, Zap, Code } from "lucide-react";

const features = [
  {
    title: "Trained on MOI Architecture",
    description: "Deep understanding of MOI's unique logic and Cocolang syntax requirements.",
    icon: Cpu,
  },
  {
    title: "Secure Contract Patterns",
    description: "Implements industry-standard security checks and validation logic automatically.",
    icon: Shield,
  },
  {
    title: "Boilerplate Templates",
    description: "Start from scratch or use pre-defined patterns for common blockchain use cases.",
    icon: Code,
  },
  {
    title: "Fast AI Generation",
    description: "Go from idea to production-ready code in seconds, not hours.",
    icon: Zap,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden section-anchor">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Built for the <span className="gradient-text">Future of MOI</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Experience the most advanced smart contract generation tool designed specifically for the MOI ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 glow-border group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-start/20 to-primary-end/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-end" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
