import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    type: "TOTAL FLAT",
    value: "2,000K",
    highlight: true,
  },
  {
    id: 2,
    type: "FLAT",
    status: "Available",
    highlight: true,
  },
  {
    id: 3,
    image: "/Images/Meeting1.avif",
    borderColor: "#7baaf7",
  },
  {
    id: 4,
    image: "/Images/Meeting2.avif",
    borderColor: "green",
  },
];

const Project = () => {
  return (
    <section className="text-center px-5 py-10 bg-white">
      <h2 className="text-[#7baaf7] font-bold text-3xl mb-10">OUR PROJECTS</h2>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {projectData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg shadow-md overflow-hidden"
          >
            {item.image ? (
              <div
                className={`border-[3px]`}
                style={{ borderColor: item.borderColor }}
              >
                <img
                  src={item.image}
                  alt={`Project ${item.id}`}
                  className="w-[170px] h-[130px] object-cover"
                />
              </div>
            ) : (
              <div className="w-[170px] h-[130px] bg-[#e6ecec] flex flex-col justify-center items-center rounded-lg">
                <p className="font-bold text-green-600 text-base">{item.type}</p>
                {item.value ? (
                  <p className="text-xl font-bold mt-2 text-black">{item.value}</p>
                ) : (
                  <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mt-2">
                    {item.status}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
  