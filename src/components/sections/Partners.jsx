import React from "react";
import { motion } from "framer-motion";
import SectionBadge from "../common/SectionBadge";
import { PARTNERS_DATA } from "../../constants/partners";

export default function Partners() {
  return (
    <section id="partners" className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Global Trust & Collaboration" />
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-950 tracking-tight leading-tight"
          >
            We’re proud to build with the{" "}
            <span className="relative inline-block text-[#FFB000]">
              greatest brands
              <svg
                className="absolute left-0 -bottom-2 w-full h-[18px]"
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
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </svg>
            </span>
            , across the globe.
          </motion.h2>
          <p className="text-gray-600 text-base sm:text-lg mt-6">
            From breakthrough startups to established corporate franchises.
          </p>
        </div>

        {/* Infinite Scrolling Logo Ribbon (Double array for seamless loop) */}
        <div className="relative w-full overflow-hidden py-6 border-y border-gray-100 bg-[#F8F9FC]/60 rounded-2xl mb-12">
          <div className="flex w-max animate-marquee pause-hover items-center">
            {[...PARTNERS_DATA, ...PARTNERS_DATA].map((partner, idx) => (
              <div
                key={idx}
                className="mx-6 sm:mx-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.src}
                  alt={`${partner.alt} logo`}
                  className="h-12 sm:h-14 w-auto max-w-[130px] sm:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Full Grid Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {PARTNERS_DATA.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="h-24 p-4 rounded-xl bg-gray-50/80 hover:bg-white border border-gray-200/60 hover:border-amber-300/80 hover:shadow-md transition-all duration-300 flex items-center justify-center group"
            >
              <img
                src={partner.src}
                alt={`${partner.alt} partner`}
                className="h-16 w-auto max-w-[200px] object-cover filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
