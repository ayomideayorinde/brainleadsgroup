import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faChevronLeft, faChevronRight, faQuoteLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import SectionBadge from "../common/SectionBadge";
import { TESTIMONIALS_DATA } from "../../constants/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Determine items per page based on viewport in state or responsive step
  const total = TESTIMONIALS_DATA.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Render SVG stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div className="flex items-center gap-1 text-[#FFC734] text-sm">
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
        {hasHalf && <FontAwesomeIcon icon={faStarHalfAlt} />}
      </div>
    );
  };

  // Slice 3 items for desktop preview window wrapping around
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(TESTIMONIALS_DATA[(currentIndex + i) % total]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section
      id="testimonials"
      className="relative bg-[#0d0d0d] py-20 lg:py-28 overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFB000]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF5C00]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionBadge text="Client Proof & Feedback" light />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Trusted by Ambitious Brands Worldwide
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Hear directly from founders, franchise directors, and enterprise executives who scaled with us.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          {/* Controls top-right on desktop */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Showing {currentIndex + 1} of {total} client reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFB000] hover:text-black border border-white/10 text-white flex items-center justify-center transition-all duration-200"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFB000] hover:text-black border border-white/10 text-white flex items-center justify-center transition-all duration-200"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, idx) => (
                <motion.div
                  key={`${item.name}-${(currentIndex + idx) % total}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`bg-white/[0.04] border border-white/10 hover:border-[#FFB000]/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                    idx === 0 ? "block" : idx === 1 ? "hidden md:flex" : "hidden lg:flex"
                  }`}
                >
                  <div>
                    {/* Top rating and quote icon */}
                    <div className="flex items-center justify-between mb-4">
                      {renderStars(item.rating)}
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl text-white/15" />
                    </div>

                    {/* Feedback quote */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                      “{item.feedback}”
                    </p>
                  </div>

                  {/* Author information */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-base">{item.name}</h4>
                      <p className="text-xs text-[#FFC734] font-medium">{item.role}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[10px]" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Compact Pagination Bar */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Jump to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-[#FFB000]" : "w-1.5 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
