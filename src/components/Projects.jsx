import React from 'react';

const images = [
  { id: 1, img: '/Images/About.avif' },
  { id: 2, img: '/Images/About.avif' },
  { id: 3, img: '/Images/About.avif' },
  { id: 4, img: '/Images/About.avif' }
];

const Projects = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-[#83acfe] mb-6 text-center">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((value, index) => {
          const borderColor = index < 2 ? 'border-[#83acfe]' : 'border-[#18a60b]';
          return (
            <div
              key={value.id}
              className={`border-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${borderColor}`}
            >
              <img
                src={value.img}
                alt={`Project ${value.id}`}
                className="w-full h-48 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
