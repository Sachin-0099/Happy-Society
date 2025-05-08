import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Founder, Startup Co.",
    image: "/Images/Testimonial.avif",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CEO, Business Inc.",
    image: "/Images/Testimonial.avif",
    text: "This service is amazing. I'm really happy with the results!",
  },
  {
    id: 3,
    name: "David Lee",
    title: "Manager, Tech Solutions",
    image: "/Images/Testimonial.avif",
    text: "Highly recommended. Great support and excellent performance.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  const currentTestimonial = testimonials[current];

  return (
    <section className="bg-[#7baaf7] text-center px-5 py-14 transition-all duration-500">
      <h2 className="text-white font-bold text-3xl mb-10">OUR TESTIMONIAL</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex justify-center mb-5">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-[70px] h-[70px] rounded-full object-cover border-4 border-white"
            />
          </div>
          <div className="text-white text-2xl flex justify-center mb-4">
            <FaQuoteLeft />
          </div>
          <p className="text-[#1f2e59] text-lg font-medium px-4">
            “{currentTestimonial.text}”
          </p>
          <p className="text-white font-semibold mt-4">{currentTestimonial.name}</p>
          <p className="text-white text-sm opacity-80">{currentTestimonial.title}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              current === index ? "bg-white opacity-100" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
