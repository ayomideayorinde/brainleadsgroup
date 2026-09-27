import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faCalendarAlt,
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import SectionBadge from "../common/SectionBadge";
import { COMPANY_INFO } from "../../constants/company";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_bk0zpsj",
        "template_k4ddrmf",
        formRef.current,
        "iWKvxS1STVD6PeFco"
      )
      .then(
        () => {
          setStatus("success");
          setStatusMessage("Thank you! Your inquiry has been sent. We'll be in touch within 2 hours.");
          formRef.current.reset();
          setTimeout(() => {
            setStatus("idle");
          }, 6000);
        },
        () => {
          setStatus("error");
          setStatusMessage("Unable to send message right now. Please call us directly or use Calendly.");
          setTimeout(() => {
            setStatus("idle");
          }, 6000);
        }
      );
  };

  return (
    <section id="contact" className="relative bg-[#F8F9FC] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FFB000]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFC734]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge text="Initiate Growth" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            Ready to Scale Your Brand & Revenue?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Schedule a complimentary discovery session or send us your project details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Direct Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>Direct Contact</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-amber-50/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FFB000] shrink-0 group-hover:scale-105 transition-transform">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Phone Consultation</p>
                    <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#FFB000] transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-amber-50/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FFB000] shrink-0 group-hover:scale-105 transition-transform">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 font-semibold uppercase">Email Us</p>
                    <p className="text-sm sm:text-base font-bold text-gray-900 truncate group-hover:text-[#FFB000] transition-colors">
                      {COMPANY_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FFB000] shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase">Headquarters</p>
                    <p className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time & Hours */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faClock} className="text-[#FFB000]" />
                  <span>Mon - Fri, 9am - 6pm CST</span>
                </span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Response within 2h
                </span>
              </div>
            </div>

            {/* Calendly Direct Card */}
            <div className="bg-gradient-to-br from-[#18181b] to-[#111111] p-6 sm:p-8 rounded-3xl text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-[#FFC734] mb-4">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <h4 className="text-lg font-bold mb-2">Prefer an instant calendar slot?</h4>
                <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  Skip the email back-and-forth. Pick a time on our calendar for a live 1-on-1 strategy call with our principal director.
                </p>
                <a
                  href={COMPANY_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center primary-bg block py-3 px-6 rounded-full font-bold text-sm shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                >
                  Book Instant Calendar Time
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1c1c1f] text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/10"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Fill in your details below and our growth strategists will prepare tailored insights for your business.
                </p>
              </div>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-sm flex items-center gap-3"
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400 text-lg shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-center gap-3"
                  >
                    <FontAwesomeIcon icon={faExclamationCircle} className="text-rose-400 text-lg shrink-0" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFB000] focus:ring-1 focus:ring-[#FFB000] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2" htmlFor="email">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFB000] focus:ring-1 focus:ring-[#FFB000] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFB000] focus:ring-1 focus:ring-[#FFB000] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2" htmlFor="company">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Inc."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFB000] focus:ring-1 focus:ring-[#FFB000] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2" htmlFor="message">
                    Project Details & Goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your brand, current challenges, and growth objectives..."
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFB000] focus:ring-1 focus:ring-[#FFB000] transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl primary-bg font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      <span>Sending Your Details...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span>Request Growth Strategy</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
