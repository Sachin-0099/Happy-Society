import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Thanks for subscribing! 🎉");
      setEmail("");
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-black to-[#0d1b2a] text-white px-5 py-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl">
              Happy <span className="text-[#00ff99]">Society</span>
            </h2>
            <p className="text-sm sm:text-base my-4 text-[#dddddd]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 bg-[#00ff99] text-black rounded-full font-bold"
            >
              Read More
            </a>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3">
              Quick Links
            </h3>
            <ul className="text-[#dddddd] space-y-2">
              <li>
                <a href="#">🏠 Home</a>
              </li>
              <li>
                <a href="#">📖 About</a>
              </li>
              <li>
                <a href="#">🛠 Services</a>
              </li>
              <li>
                <a href="#">📂 Projects</a>
              </li>
              <li>
                <a href="#">💬 Client Says</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3">
              Connect With Us
            </h3>
            <div className="flex gap-4 text-white text-xl sm:text-2xl">
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl text-[#00ccff] mb-3">
              Newsletter
            </h3>
            <p className="w-full text-sm sm:text-base text-[#dddddd] mb-4">
              Subscribe to get updates on our latest offers and news.
            </p>
            <form
              onSubmit={validateEmail}
              className="flex flex-col sm:flex-row items-center gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-2 rounded-md border border-gray-300"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded-md font-bold whitespace-nowrap"
              >
                <i className="fas fa-envelope"></i> Subscribe
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </footer>
      <div className="text-center bg-green-600 text-white font-bold py-3">
        &copy; 2022 Lazycrazy. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
