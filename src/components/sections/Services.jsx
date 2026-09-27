import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight, faFilm, faBullhorn, faChartLine, faUsers, faStore } from "@fortawesome/free-solid-svg-icons";
import SectionBadge from "../common/SectionBadge";
import { SERVICES_DATA } from "../../constants/services";

const iconsMap = [faFilm, faBullhorn, faChartLine, faUsers, faStore];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const activeService = SERVICES_DATA[activeTab];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#F8F9FC] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionBadge text="Comprehensive Capabilities" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Growth Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            From cinematic storytelling to omnichannel distribution, sales optimization,
            and franchise expansion — we build an integrated ecosystem for unstoppable market leadership.
          </p>
        </div>

        {/* Interactive Services Tab Selector (Both Desktop & Mobile scrollable) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-hidden pb-4 mb-8 sm:mb-12 no-scrollbar">
          {SERVICES_DATA.map((service, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${isSelected
                  ? "primary-bg shadow-md "
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
                  }`}
              >
                <FontAwesomeIcon
                  icon={iconsMap[idx] || faChartLine}
                  className={isSelected ? "text-gray-950" : "text-[#FFB000]"}
                />
                <span>{service.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Service Card (Dynamic Showcase) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Details & Checklist (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFB000] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      {activeService.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {activeService.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
                    {activeService.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {activeService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-[#FFB000] text-base mt-1 shrink-0"
                        />
                        <span className="text-sm sm:text-base text-gray-700 leading-normal">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Row with sketch preview */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 primary-bg px-7 py-3.5 rounded-full font-bold text-sm shadow-md"
                  >
                    <span>{activeService.cta}</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </motion.a>

                  {activeService.sketch && (
                    <img
                      src={activeService.sketch}
                      alt="Service decorative illustration"
                      className="h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all hidden sm:block"
                    />
                  )}
                </div>
              </div>

              {/* Right Column: Hero Image Preview (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] bg-gradient-to-tr from-gray-950 to-gray-800 overflow-hidden">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs font-semibold backdrop-blur-md bg-black/40 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span>Brainleads Strategic Execution</span>
                  <span className="text-[#FFC734]">Verified Impact</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All Services Quick Grid Cards below for rapid browsing on mobile & tablet */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border ${activeTab === idx
                ? "bg-amber-50/50 border-[#FFB000] shadow-md"
                : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#FFB000]">{service.category}</span>
                <FontAwesomeIcon icon={iconsMap[idx] || faChartLine} className="text-gray-400 text-sm" />
              </div>
              <h4 className="font-bold text-gray-900 text-base mb-2">{service.shortTitle}</h4>
              <p className="text-gray-500 text-xs line-clamp-2 mb-3">{service.description}</p>
              <div className="text-xs font-semibold text-gray-700 flex items-center gap-1 group">
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
