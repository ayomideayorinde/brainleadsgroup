"use client";

import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-cover bg-center">
      
      <motion.div
        className="absolute inset-0"
        style={{ backgroundImage: `url('/images/heroimg.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <motion.div
        className="bg-black w-full h-full absolute z-10 top-0 right-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="w-full flex flex-col items-center gap-[20px] lg:px-[150px] px-[50px] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-[32px] lg:text-[40px] font-bold capitalize"
        >
          Rise above the noise.{" "}
          <span className="primary-fg">Turn Clicks Into Customers.</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[18px] lg:text-[20px]"
        >
          Your business deserves to prosper. Whether local or global, we create
          your path through digital marketing.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full font-bold primary-bg px-5 py-3 mt-5 lg:mt-auto"
        >
          <a
            href="https://calendly.com/brainleadsgroup/tailor-marketing-insight-for-your-business"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Strategy Call Now
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
}
