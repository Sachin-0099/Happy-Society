import React from 'react';

const AboutSociety = () => {
  return (
    <section
      className="w-full bg-white flex flex-col md:flex-row items-center justify-center py-10 px-4 md:px-20"
      aria-label="About Happy Society Section"
    >
      {/* Left side - Overlapping Images */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center mb-10 md:mb-0 mr-40">
        {/* Back square image */}
        <img
          src="/Images/About.avif"
          alt="Background city landscape"
          className="w-64 h-64 sm:w-64 sm:h-64 object-cover border-[5px] border-green-500 rounded-md"
        />
        {/* Front rectangle image - overlaps on right side */}
        <img
          src="/Images/About.avif"
          alt="Front park landscape"
          className="w-60 h-40 sm:w-72 sm:h-48 object-cover border-[3px] border-blue-400 rounded-md absolute top-22 left-auto right-[-2rem] sm:right-[-3rem] z-10 shadow-lg"
        />
      </div>

      {/* Right side - Text Content */}
      <div className="w-full md:w-1/2 text-left space-y-4 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-black">ABOUT </span>
          <span className="text-green-600">HAPPY SOCIETY</span>
        </h2>
        <p className="text-blue-400 text-base sm:text-lg font-medium">
          This company since 2xxx on internate
        </p>
        <div className="text-black leading-relaxed space-y-1 text-sm sm:text-base">
          <p>It has survived not only five centuries......</p>
          <p>It has survived not only five centuries......</p>
          <p>It has survived not only five centuries......</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default AboutSociety;
