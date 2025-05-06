import React from 'react';

const About = () => {
  return (
    <section
      className="relative w-full min-h-[400px] bg-white flex flex-col md:flex-row overflow-hidden"
      aria-label="About Happy Society Section"
    >
      {/* Background image with lazy loading */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/Images/AboutBack.avif"
          alt="Abstract background representing society buildings"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          width="1200"
          height="600"
        />
      </div>

      {/* Left side with curved image */}
      <div className="relative w-full md:w-[40%] h-[300px] md:h-auto z-10 order-1 md:order-none">
        {/* Blue curved edge */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            clipPath: 'ellipse(100% 100% at 0% 50%)',
            backgroundColor: '#83acfe',
            transform: 'translateX(6px)',
            zIndex: 0,
          }}
          aria-hidden="true"
        ></div>

        {/* Main image with lazy loading */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            clipPath: 'ellipse(100% 100% at 0% 50%)',
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

      {/* Right side text content */}
      <div className="w-full md:w-[60%] z-10 flex flex-col justify-center items-center text-center px-6 py-10 md:py-0 md:-mt-20 order-0 md:order-none">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#18a60b] uppercase mb-4">
          Happy Society
        </h2>
        <p className="text-base sm:text-lg text-gray-800 max-w-xl">
          An ideal society would be the graveyard <br className="hidden sm:block" />
          <span className="sm:inline-block sm:ml-[35px]">for human greatness.</span>
        </p>
      </div>
    </section>
  );
};

export default About;
