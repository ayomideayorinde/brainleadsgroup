import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMapMarkerAlt, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import logoWhite from "../../assets/brainleadswhite.png";
import { COMPANY_INFO } from "../../constants/company";
import { NAV_LINKS } from "../../constants/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden" id="footer">
      {/* Background ambient gold glowing orbs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FFB000]/20 to-[#FFC734]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-bl from-[#FFC734]/15 to-[#FFB000]/5 blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Brand & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#top" className="inline-block focus:outline-none">
              <img
                src={logoWhite}
                alt="Brainleads Group"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Brainleads Group is a premier marketing and growth firm delivering data-driven,
              high-converting creative solutions. Serving over{" "}
              <span className="font-semibold text-[#FFC734]">5,000+ clients across 20+ countries</span>,
              we amplify brand reach, accelerate sales velocity, and power national franchise expansion.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: faFacebook, url: COMPANY_INFO.socials.facebook, label: "Facebook" },
                { icon: faInstagram, url: COMPANY_INFO.socials.instagram, label: "Instagram" },
                { icon: faXTwitter, url: COMPANY_INFO.socials.twitter, label: "Twitter" },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-[#FFB000] flex items-center justify-center text-gray-300 hover:text-[#FFB000] transition-colors"
                >
                  <FontAwesomeIcon icon={item.icon} className="text-base" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#FFB000] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFC734] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]/40 group-hover:bg-[#FFB000] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-[#FFB000] pl-3">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="hover:text-[#FFC734] transition-colors flex items-start gap-3"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[#FFB000] mt-1 text-xs" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#FFC734] transition-colors flex items-start gap-3"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#FFB000] mt-1 text-xs" />
                  <span className="break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#FFB000] mt-1 text-xs" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block primary-bg text-xs font-bold px-5 py-2.5 rounded-full shadow-md"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-[#FFC734] font-medium">Brainleads Group</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Winnipeg, MB &bull; Serving Globally</span>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-[#FFB000] transition-colors flex items-center gap-1.5 focus:outline-none"
            >
              <span>Back to top</span>
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
