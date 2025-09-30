"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 lg:px-32 bg-[#111] text-white overflow-hidden"
    >
        
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-20 blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[28px] md:text-[40px] font-bold mb-6 leading-snug"
        >
          We Don’t Just Market —{" "}
          <span className="primary-fg">We Transform</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 text-[18px] lg:text-[20px] leading-relaxed mb-10"
        >
          At Brainleads Group, we combine storytelling, data-driven marketing,
          sales strategy, and franchise growth expertise to turn brands into
          industry leaders. From creative campaigns to lead generation and
          franchise expansion, we make your brand unmissable, unforgettable, and
          unstoppable.
        </motion.p>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="primary-bg px-6 py-3 rounded-full font-bold"
        >
          <a
            href="https://calendly.com/brainleadsgroup/tailor-marketing-insight-for-your-business"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Strategy Call
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
}
