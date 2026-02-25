import { motion } from "motion/react";
import { MessageSquare, Cpu, Download } from "lucide-react";

const steps = [
  {
    title: "Describe your contract",
    description: "Use plain English to explain the logic, rules, and state of your smart contract.",
    icon: MessageSquare,
  },
  {
    title: "AI generates code",
    description: "Our specialized model crafts secure, syntactically correct Cocolang code instantly.",
    icon: Cpu,
  },
  {
    title: "Download or deploy",
    description: "Get your .coco file ready for the MOI ecosystem or deploy it directly.",
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 relative section-anchor">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-start to-primary-end mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-primary-start/30 to-transparent -z-10" />
              )}
              
              <div className="glass-card p-8 md:p-10 text-center glow-border h-full flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center mb-6 shadow-lg shadow-primary-start/20">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="mt-auto pt-6 text-primary-end font-bold text-4xl opacity-10">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
