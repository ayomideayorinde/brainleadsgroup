"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "Step 1", title: "AUDIT", icon: "🔍", desc: "We review your current marketing, identify gaps, and spot quick wins." },
  { step: "Step 2", title: "RESEARCH", icon: "📊", desc: "We analyze your industry, competition, and audience to uncover opportunities." },
  { step: "Step 3", title: "STRATEGY", icon: "🧠", desc: "We build a tailored plan designed to reach your ideal customers." },
  { step: "Step 4", title: "EXECUTION", icon: "🚀", desc: "We launch and manage campaigns across the right platforms for maximum reach." },
  { step: "Step 5", title: "OPTIMIZE", icon: "📈", desc: "We track performance in real time and fine-tune for higher ROI." },
  { step: "Step 6", title: "CONVERSION", icon: "💰", desc: "We focus on turning leads into paying customers — because clicks alone don’t pay the bills." },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Process() {
  return (
    <section className="py-5">
      
      <motion.div
        className="text-center py-12 px-[25px] lg:px-[50px]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-[32px] lg:text-[40px] font-bold capitalize">
          How We Do It
        </h1>
        <p className="text-[18px] lg:text-[20px]">
          Every brand is different, so we take a structured, customized approach that delivers measurable results.
        </p>
      </motion.div>

      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-[25px] lg:px-[50px] pb-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg py-6 px-3 hover:shadow-2xl transition-shadow duration-300 card-bg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
          >
            <div className="mb-2">
              <span className="text-2xl font-bold text-[#FFB000]">{step.step}</span>
            </div>
            <motion.div
              className="mb-2 text-4xl text-[#FFB000]"
              initial={{ rotate: -15, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {step.icon}
            </motion.div>
            <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
            <p className="text-sm text-center px-2">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
