import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/brainleads.png";
import { NAV_LINKS } from "../../constants/navigation";
import { COMPANY_INFO } from "../../constants/company";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for highlight
      const sections = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) =>
        l.href.replace("#", "")
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        if (!id) continue;
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2 group focus:outline-none">
            <img
              src={logo}
              alt="Brainleads Group Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const linkId = link.href.replace("#", "");
              const isActive = linkId === activeSection || (link.href === "#" && !activeSection);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-gray-950 font-bold"
                      : "text-gray-600 hover:text-gray-950 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FFB000] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="text-xs font-semibold text-gray-600 hover:text-[#FFB000] transition-colors flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faPhone} className="text-[#FFB000]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={COMPANY_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-bg font-semibold text-xs xl:text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-bg text-xs font-bold px-3 py-2 rounded-full sm:hidden"
            >
              Book Call
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
            />

            <motion.aside
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="nav-sidebar fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[999] lg:hidden flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top */}
              <div className="p-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <img src={logo} alt="Brainleads Logo" className="h-8 w-auto object-contain" />
                  <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="mt-6 flex flex-col space-y-1">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.25 }}
                      className="px-4 py-3 rounded-xl text-lg font-semibold text-gray-800 hover:text-[#FFB000] hover:bg-amber-50/50 transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs text-gray-300" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Contact Info & CTA */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                <a
                  href={COMPANY_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full text-center primary-bg block py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  Book Free Consultation
                </a>

                <div className="space-y-2 text-xs text-gray-600 pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="flex items-center gap-2 hover:text-[#FFB000] transition-colors"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-[#FFB000]" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-2 hover:text-[#FFB000] transition-colors"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#FFB000]" />
                    <span className="truncate">{COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
