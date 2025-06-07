import React, { useRef, useEffect } from "react";
import aakash from "../assets/aakash.jpg";
import gopi from "../assets/gopi.jpg";
import wos from "../assets/wos.png";

const galleryData = {
  researchActivities: [
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
  ],
  groupOutings: [
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
  ],
  familyFriends: [
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
  ],
  travel: [
    { imagePath: aakash, caption: "Our groundbreaking research on AI and ML." },
    { imagePath: gopi, caption: "Collaboration with global researchers." },
    { imagePath: wos, caption: "Fieldwork and practical experiments." },
  ],
};

function Gallery() {
  const scrollContainerRefs = useRef({});

  useEffect(() => {
    const interval = setInterval(() => {
      Object.keys(scrollContainerRefs.current).forEach((key) => {
        const container = scrollContainerRefs.current[key];
        if (container) {
          const scrollAmount = container.clientWidth * 0.8; // Dynamic scroll
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollGallery = (key, direction) => {
    const container = scrollContainerRefs.current[key];
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const funnyCaptions = {
    researchActivities: "Exploring new frontiers, one experiment at a time!",
    groupOutings: "Scientific minds need breaks too!",
    familyFriends: "Balancing equations and relationships!",
    travel: "As much as you can... As far as you can... As long as you can...",
  };

  const renderSection = (title, data, key) => (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 italic mb-4">{funnyCaptions[key]}</p>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scrollGallery(key, "left")}
        >
          &lt;
        </button>
        <div
          ref={(el) => (scrollContainerRefs.current[key] = el)}
          className="flex overflow-x-auto space-x-4 pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", overflow: "hidden", whiteSpace: "nowrap" }}
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {data.map((item, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <img
                src={item.imagePath}
                alt={item.caption}
                className="block object-cover rounded-lg"
                style={{ height: "250px", width: "auto", maxWidth: "300px" }}
              />
              <p className="text-gray-600 text-center mt-2" style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal", padding: "8px", maxWidth: "300px" }}>
                {item.caption}
              </p>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
          onClick={() => scrollGallery(key, "right")}
        >
          &gt;
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-3 text-lg text-gray-600">A collection of moments, projects, and memories.</p>
        </div>
        {Object.entries(galleryData).map(([key, data]) =>
          renderSection(
            key === "researchActivities" ? "Research Activities" :
            key === "groupOutings" ? "Group Outings" :
            key === "familyFriends" ? "Family & Friends" :
            key === "travel" ? "Travel" : key,
            data,
            key
          )
        )}
      </div>
    </section>
  );
}

export default Gallery;
