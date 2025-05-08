import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaHeart } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isHovered, setIsHovered] = useState(null);

  // Social media links with icons
  const socialLinks = [
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Facebook", icon: <FaFacebook />, url: "#" }
  ];

  // Quick links with icons and hover effects
  const quickLinks = [
    { name: "Home", icon: "🏠", url: "#" },
    { name: "About", icon: "📖", url: "#" },
    { name: "Services", icon: "🛠", url: "#" },
    { name: "Projects", icon: "📂", url: "#" },
    { name: "Client Says", icon: "💬", url: "#" }
  ];

  const validateEmail = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  // Animation effect for the newsletter section
  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <>
      <footer className="bg-gradient-to-br from-black to-[#0d1b2a] text-white px-5 py-12 transition-all duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="group">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-105">
              Happy <span className="text-[#00ff99]">Society</span>
            </h2>
            <p className="text-sm sm:text-base my-4 text-[#dddddd] group-hover:text-white transition-colors duration-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-5 py-2 bg-[#00ff99] text-black rounded-full font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              Read More <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3 hover:text-white transition-colors duration-300">
              Quick Links
            </h3>
            <ul className="text-[#dddddd] space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="flex items-center hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setIsHovered(index)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span className="relative">
                      {link.name}
                      <span 
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#00ff99] transition-all duration-300 ${isHovered === index ? 'w-full' : 'w-0'}`}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3 hover:text-white transition-colors duration-300">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-white text-2xl p-2 bg-gray-800 rounded-full hover:bg-[#00ff99] hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-lg mb-2">Customer Support</h4>
              <p className="text-sm text-[#dddddd] hover:text-white transition-colors duration-300">
                ✉️ support@happysociety.com
              </p>
              <p className="text-sm text-[#dddddd] hover:text-white transition-colors duration-300">
                📞 +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3 hover:text-white transition-colors duration-300">
              Newsletter
            </h3>
            <p className="w-full text-sm sm:text-base text-[#dddddd] mb-4 hover:text-white transition-colors duration-300">
              Subscribe to get updates on our latest offers and news.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500 text-white p-4 rounded-md animate-bounce">
                Thanks for subscribing! 🎉
              </div>
            ) : (
              <form
                onSubmit={validateEmail}
                className="flex flex-col sm:flex-row items-center gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-2 rounded-md border border-gray-300 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99] transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105"
                >
                  <FaEnvelope className="mr-2" /> Subscribe
                </button>
              </form>
            )}
            {error && (
              <p className="text-red-500 text-sm mt-2 animate-pulse">{error}</p>
            )}
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="text-center bg-gradient-to-r from-green-600 to-green-800 text-white font-bold py-3 flex justify-center items-center">
        &copy; {currentYear} Lazycrazy. All Rights Reserved. 
        <span className="ml-2 flex items-center">
          Made with <FaHeart className="mx-1 text-red-500" /> by Happy Society
        </span>
      </div>
    </>
  );
};

export default Footer;