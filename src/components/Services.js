"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Campaign Video Production – Storytelling That Sells",
    description:
      "We craft story-driven campaigns that connect your brand with the right audience.",
    details: [
      "Showcase your mission, vision, and values",
      "Highlight your unique selling points",
      "Build emotional connections that convert",
      "Delivery Channels: Social media (Instagram, TikTok, YouTube, LinkedIn, Facebook), TV & Radio, Magazines, Podcasts & Audio Platforms",
    ],
    cta: "Let’s Tell Your Brand Story",
    image: "/images/campaign.webp",
  },
  {
    title: "Digital & Non-Digital Distribution – Maximum Reach",
    description:
      "Your campaigns are only powerful if people see them. We ensure your brand reaches the right audience, everywhere.",
    details: [
      "Digital Marketing: Social media ads, Search engine marketing & PPC, AI-powered retargeting, Email & drip campaigns, Content marketing, Influencer collaborations, Webinars & Online PR",
      "Non-Digital Marketing: Billboards, flyers, posters, TV & Radio ads, Print sponsorships, Event activations, Retail promotions",
    ],
    cta: "Schedule a Distribution Strategy Call",
    image: "/images/digital.jpg",
  },
  {
    title: "Sales & Revenue Strategy – Tripling Your Growth",
    description:
      "We turn marketing campaigns into measurable revenue with strategies that deliver.",
    details: [
      "Develop custom sales strategies",
      "Optimize pricing, promotion, and product focus",
      "Train staff as skilled sales consultants",
      "Implement upselling, cross-selling, and journey optimization",
      "Design promotions & loyalty initiatives",
    ],
    cta: "Start Tripling Your Sales Today",
    image: "/images/sales.webp",
  },
  {
    title: "Lead Generation & Retention – Capture, Convert, Keep",
    description:
      "We capture leads, nurture them, and turn them into long-term loyal customers.",
    details: [
      "Lead Magnets: Free guides, webinars, discounts, quizzes",
      "Nurturing: Personalized follow-ups, Retargeting, Drip campaigns",
      "Retention: Loyalty programs, Subscriptions, Customer appreciation campaigns, Community engagement",
    ],
    cta: "Generate More Leads Today",
    image: "/images/lead.jpg",
  },
  {
    title: "Franchise Growth & Marketing – Expand Nationwide",
    description:
      "We turn proven brands into thriving franchises with end-to-end growth solutions.",
    details: [
      "Franchise Strategy: Readiness, models, locations, investor targeting",
      "Franchise Marketing: Storytelling campaigns, Digital ads, Print campaigns, Events",
      "Franchisee Lead Generation: Landing pages, Email nurturing, CRM setup",
      "Ongoing Support: Onboarding, Sales & marketing training, Replicable campaigns",
    ],
    cta: "Start Your Franchise Journey Today",
    image: "/images/Franchise.webp",
  },
];

function Section({ section, index, setActiveIndex }) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  return (
    <section
      ref={ref}
      id="services"
      className="min-h-[50vh] lg:min-h-screen flex flex-col justify-center items-start p-6 md:p-12"
    >
      
      <div className="block lg:hidden mb-6 mt-12 w-full">
        <motion.img
          src={section.image}
          alt={section.title}
          className="w-full h-56 object-cover rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.title}</h2>
      <p className="text-gray-600 text-[16px] md:text-[18px] mb-4">
        {section.description}
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        {section.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="primary-bg px-6 py-3 rounded-full font-bold"
      >
        <a href="#contact">{section.cta}</a>
      </motion.button>
    </section>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      
      <motion.div
        className="text-center py-12 px-[25px] lg:px-[50px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[32px] lg:text-[40px] font-bold">Our Services</h1>
        <p className="text-gray-600 text-[18px] lg:text-[20px]  mx-auto mt-3 max-w-3xl">
          From storytelling to distribution, sales strategy, lead generation,
          and franchise growth — we build a complete ecosystem for your brand’s
          success.
        </p>
      </motion.div>

      
      <div className="flex flex-col lg:flex-row lg:px-0 px-[25px]">
        
        <aside className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center bg-white">
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
