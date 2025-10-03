"use client";

import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function WhyChooseBrainleads() {
  const points = [
    "Creative campaigns that tell your story",
    "Distribution strategies that make your brand unmissable",
    "Proven sales strategies to triple revenue",
    "Lead generation & retention systems for long-term growth",
    "Franchise growth expertise to expand nationwide",
  ];

  return (
    <section 
      id="whychooseus"
      className="relative w-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden px-[25px] lg:px-[80px] py-16"
    >
      
      <div className="flex-1 relative z-10 text-left lg:pr-12">
        <motion.h2
          className="text-[32px] lg:text-[42px] font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Brand <span className="primary-fg">Deserves to Lead</span>
        </motion.h2>

        <div className="space-y-5 mb-10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="primary-fg text-2xl">&#10004;&#xFE0E;</span>
              <p className="text-lg lg:text-xl text-gray-300">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 rounded-full text-white font-semibold text-lg primary-bg shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us Today
        </motion.a>
      </div>

      
      <div className="flex-1 lg:flex hidden items-center justify-center relative mt-12 lg:mt-0">
        <motion.div
          className="w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 opacity-80 blur-2xl absolute"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.img
          src="/images/why-us-visual.png"
          alt="Why Choose Brainleads"
          className="relative w-[280px] lg:w-[380px] rounded-xl shadow-2xl z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
