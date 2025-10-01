"use client";

import { motion } from "framer-motion";

const logos = [
  { src: "/images/partners/bowman.png", alt: "Bowman" },
  { src: "/images/partners/chrisarisyian.jpg", alt: "Chrisarisyian" },
  { src: "/images/partners/construct.jpg", alt: "Construct" },
  { src: "/images/partners/loveville.png", alt: "Loveville" },
  { src: "/images/partners/panah.jpg", alt: "Panah" },
  { src: "/images/partners/saleh.jpg", alt: "Saleh" },
  { src: "/images/partners/saleh2.jpg", alt: "Saleh2" },
  { src: "/images/partners/tcdd.png", alt: "Tcdd" },
  { src: "/images/partners/thebrick.png", alt: "Thebrick" },
  { src: "/images/partners/zaloumis.jpg", alt: "Zaloumis" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-[120px] px-6 md:px-12 lg:px-20 font-['Helvetica_Neue','Helvetica','Arial',sans-serif]">
      {/* Title with Scribble Underline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-[34px] md:text-[40px] lg:text-[68px] font-semibold leading-tight text-center w-full mx-auto tracking-tight"
      >
        We’re grateful to work with the{" "} <br />
        <span className="relative inline-block text-[#FFB000] font-semibold">
          greatest brands
          <svg
            className="absolute left-0 -bottom-2 w-full h-[20px]"
            viewBox="-400 -55 730 60"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15"
              stroke="#FFB000"
              strokeWidth="20"
              pathLength="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </svg>
        </span>
        , all across the world.
      </motion.h2>

      {/* Logos Grid */}
      <motion.div
        className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-16 items-center justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-center grayscale"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-[80px] w-[150px] object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
