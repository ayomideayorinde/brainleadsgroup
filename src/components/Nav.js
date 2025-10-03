import logo from "../assets/brainleads.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    const handleScroll = () => setShowMenu(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false); // closes when clicking a link
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999999999]">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Brainleads Logo" className="w-[120px]" />
        </a>

        {/* Toggle Button */}
        <button
          onClick={() => setShowMenu(true)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Overlay background */}
      {showMenu && (
        <div className="fixed inset-0 bg-black/40 z-[998]" onClick={() => setShowMenu(false)}></div>
      )}

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen lg:w-[50%] w-full bg-white shadow-2xl z-[999] transform transition-transform duration-500 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setShowMenu(false)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <FontAwesomeIcon icon={faXmark} className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col items-start gap-6 px-6">
          {["Home", "About", "Services", "Why Choose Us", "Testimonials", "Partners", "Contact"].map(
            (item, idx) => (
              <li key={idx}>
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : "#" + item.replace(/\s+/g, "").toLowerCase()
                  }
                  onClick={handleLinkClick}
                  className="block text-2xl text-gray-800 font-medium hover:text-[#FFB000] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            )
          )}

          {/* CTA Button */}
          <li className="mt-6 w-full">
            <a
              href="https://calendly.com/brainleadsgroup/tailor-marketing-insight-for-your-business"
              target="_blank"
              onClick={handleLinkClick}
              className="block w-full text-center bg-[#FFB000] hover:bg-[#e6a700] text-white px-5 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Book A Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
