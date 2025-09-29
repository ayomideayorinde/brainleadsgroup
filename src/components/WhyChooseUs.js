"use client";

import { motion, useReducedMotion } from "framer-motion";

const features = [
  { icon: "✔️", title: "Transparency", desc: "You see exactly what we do and the results we deliver." },
  { icon: "⚡", title: "Agility", desc: "We adapt fast to market changes and trends." },
  { icon: "📈", title: "Impact", desc: "Every campaign is designed to produce measurable growth." },
];


const headingVariant = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F9FC] py-12 lg:px-[50px]" id="values" aria-labelledby="values-heading">
      
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-10 top-8 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-300 opacity-20 blur-3xl transform animate-floatGradient hidden sm:block" />
        <div className="absolute right-6 -bottom-6 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 opacity-16 blur-3xl transform animate-floatGradientSlow hidden md:block" />
      </div>

      
      <motion.div
        id="values-heading"
        className="text-center flex flex-col items-center gap-4 px-[20px] mb-8"
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariant}
      >
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold">Our Values</h2>
        <p className="text-gray-600 text-[18px] lg:text-[20px]">
          The principles that guide everything we do—strategy, execution and continuous improvement.
        </p>
      </motion.div>

      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-8 lg:px-12"
        variants={containerVariant}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, i) => (
          <motion.article
            key={i}
            className="bg-white p-5 md:p-6 rounded-lg shadow-sm flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariant}
            whileHover={reduce ? undefined : { y: -6, scale: 1.02 }}
            role="article"
            aria-label={`${feature.title} — ${feature.desc}`}
          >
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFB000]/10 to-[#FFB000]/5 text-2xl md:text-3xl">
              <span aria-hidden>{feature.icon}</span>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
