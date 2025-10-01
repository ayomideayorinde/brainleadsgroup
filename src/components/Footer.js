"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden" id="footer">
      {/* Background floating gradients */}
      <motion.div
        className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFB000] to-[#FFC734] opacity-30 blur-[100px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-[#FFC734] to-[#FFB000] opacity-20 blur-[120px]"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left - About */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] to-[#FFC734]">
            Since Our Founding in 2015
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Brainleads Group is a premier marketing firm, delivering data-driven, creative solutions.
            Serving over <span className="font-semibold text-[#FFC734]">5,000+ clients across 20+ countries</span>,
            we boost brand awareness, generate leads, and drive measurable growth. <br /><br />
            From solo entrepreneurs to financial institutions, we integrate seamlessly with your marketing efforts or act as your dedicated agency partner.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-2">
            {[
              { icon: faFacebook, url: "https://www.facebook.com/share/16kaSzKyjP/" },
              { icon: faInstagram, url: "https://www.instagram.com/brainleadsgroup" },
              { icon: faXTwitter, url: "#" },
            ].map((item, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.3, rotate: i === 1 ? -8 : 8 }}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#FFC734] hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right - Quick Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start gap-6"
        >
          <h2 className="text-xl lg:text-2xl font-bold border-b-2 border-[#FFB000] pb-2">
            Quick Links
          </h2>
          <ul className="space-y-3 text-lg">
            {["Home", "Services", "Benefits", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8, color: "#FFC734" }}
                className="cursor-pointer transition-all duration-300"
              >
                <a href={link === "Home" ? "/" : `#${link.toLowerCase()}`}>
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 border-t border-gray-800 py-6 text-center"
      >
        <p className="text-sm text-gray-400">
          &copy; 2025 <span className="text-[#FFC734] font-semibold">Brainleads Group</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
