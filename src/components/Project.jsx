import React from "react";

const Project = () => {
  return (
    <section className="text-center p-5">
      <h2 className="text-[#7baaf7] font-bold text-2xl mb-8">OUR PROJECTS</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        <div className="w-[170px] h-[130px] bg-[#e6ecec] flex flex-col justify-center items-center">
          <p className="font-bold text-green-600 text-base">TOTAL FLAT</p>
          <p className="text-xl font-bold mt-2 text-black">2,000K</p>
        </div>
        <div className="w-[170px] h-[130px] bg-[#e6ecec] flex flex-col justify-center items-center">
          <p className="font-bold text-green-600 text-base">FLAT</p>
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mt-2">
            Available
          </span>
        </div>
        <div className="border-[3px] border-[#7baaf7]">
          <img
            src="/Images/Meeting1.avif"
            alt="Meeting 1"
            className="w-[170px] h-[130px] object-cover"
          />
        </div>
        <div className="border-[3px] border-green-600">
          <img
            src="/Images/Meeting2.avif"
            alt="Meeting 2"
            className="w-[170px] h-[130px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
