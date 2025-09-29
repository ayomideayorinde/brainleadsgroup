import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Ads Video Production",
    description:
      "High-impact video ads that grab attention, tell your story, and drive measurable sales results.",
    image: "/images/ads-video.webp",
  },
  {
    title: "Media Strategy & Planning",
    description:
      "Data-backed media plans that put your brand in front of the right people, at the right time, for the best ROI possible.",
    image: "/images/media-planning.png",
  },
  {
    title: "Full-Funnel Media Activation",
    description:
      "We engage your audience at every stage — from awareness to purchase — with tactics proven to drive conversions.",
    image: "/images/full-funnel.jpg",
  },
  {
    title: "Media Operations",
    description:
      "We handle every detail from onboarding to campaign wrap-up, ensuring smooth execution and zero wasted ad spend.",
    image: "/images/media-operation.jpg",
  },
  {
    title: "Data, Analytics & Technology",
    description:
      "Custom dashboards give you full transparency on what’s working and what needs adjusting.",
    image: "/images/data-analytics.jpg",
  },
];

function Section({ section, index, setActiveIndex }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  return (
    <section
      ref={ref}
      className="min-h-[40vh] lg:min-h-screen flex flex-col justify-center items-start p-4 md:p-12"
    >
      {/* Mobile Image with parallax animation */}
      <div className="block lg:hidden mb-4 mt-20 w-full">
        <motion.img
          src={section.image}
          alt={section.title}
          className="w-full h-48 object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h2 className="text-2xl md:text-4xl font-bold mb-2">{section.title}</h2>
      <p className="text-sm md:text-lg text-gray-600">{section.description}</p>
    </section>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Section Heading */}
      <motion.div
        className="text-center py-12 px-[25px] lg:px-[50px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[32px] lg:text-[40px] font-bold">Our Services</h1>
        <p className="text-gray-600 text-[18px] lg:text-[20px]  mx-auto mt-3">
          We provide end-to-end media solutions — from planning and production
          to execution and optimization — so your brand achieves measurable
          growth.
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row lg:px-0 px-[25px]">
        {/* Left (desktop only, sticky image) */}
        <aside className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={sections[activeIndex].image}
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className="w-3/4 h-auto rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </aside>

        {/* Right (scrollable service sections) */}
        <main className="w-full lg:w-1/2">
          {sections.map((sec, i) => (
            <Section
              key={i}
              section={sec}
              index={i}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
