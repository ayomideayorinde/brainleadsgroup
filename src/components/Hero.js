"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-vid-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-6 lg:px-24 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Your Brand, Unstoppable 
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-[18px] lg:text-[20px] mb-10 text-gray-200"
        >
          We tell your story, amplify your reach, and grow your revenue with creative campaigns, strategic marketing, and franchise expansion solutions.
        </motion.p>

        <motion.a
          href="https://calendly.com/brainleadsgroup/tailor-marketing-insight-for-your-business"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block rounded-full primary-bg px-8 py-4 font-bold text-lg transition"
        >
          Get Your Free Brand Growth Consultation
        </motion.a>
      </motion.div>
    </section>
  );
}
