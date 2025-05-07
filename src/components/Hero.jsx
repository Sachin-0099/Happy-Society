import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[400px] bg-[#83acfe] flex flex-col md:flex-row overflow-hidden"
      aria-label="About Happy Society Section"
    >
      {/* Right side text content */}
      <div className="w-full md:w-[60%] z-10 flex flex-col justify-center items-start text-left px-6 py-10 md:py-0 md:-mt-20 order-0 md:order-none lg:ml-20">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#fff] uppercase mb-4 underline">
    Happy <br /> Society
  </h2>
  <p className="text-base sm:text-lg text-gray-800 max-w-xl mb-6">
    An ideal society would be the graveyard. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Aut praesentium cum fugit sint iste tenetur, hic deserunt fugiat adipisci ipsa.
    <br className="hidden sm:block" />
  </p>
  <button className="py-2 px-4 bg-white text-[#83acfe] font-semibold rounded-xl hover:bg-gray-100 transition">
    Read More
  </button>
</div>


      {/* Left side with curved image and simulated left border */}
      <div className="relative w-full md:w-[40%] h-[300px] md:h-auto z-10 order-1 md:order-none">
        {/* Simulated left border using a background layer */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: 'ellipse(100% 100% at 100% 50%)',
            backgroundColor: '#ffffff', // Border color
            zIndex: 5,
            transform: 'translateX(-8px)', // Border thickness
          }}
        ></div>

        {/* Main image with lazy loading */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            clipPath: 'ellipse(100% 100% at 100% 50%)',
            zIndex: 10,
          }}
        >
          <img
            src="/Images/About.avif"
            alt="Community members in a happy society"
            className="w-full h-full object-cover"
            loading="lazy"
            width="800"
            height="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
