import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-[#7baaf7] text-center p-10">
      <h2 className="text-white font-bold text-2xl mb-5">OUR TESTIMONIAL</h2>
      <div className="flex justify-center mb-5">
        <img src="/Images/Testimonial.avif" alt="User" className="w-[60px] h-[60px] rounded-full object-cover" />
      </div>
      <p className="text-[#1f2e59] text-base max-w-[600px] mx-auto mb-5">
        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry
      </p>
      <div className="flex justify-center gap-2">
        <span className="w-[10px] h-[10px] bg-white rounded-full opacity-100"></span>
        <span className="w-[10px] h-[10px] bg-white rounded-full opacity-50"></span>
        <span className="w-[10px] h-[10px] bg-white rounded-full opacity-50"></span>
      </div>
    </section>
  );
};

export default Testimonial;
