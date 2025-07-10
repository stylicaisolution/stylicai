import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Importing icons
import IMG from "../../assets/downloads.png";
import IMG1 from "../../assets/ai.png";
import IMG2 from "../../assets/upload.png";

export default function How() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 py-16 md:py-12">
      <div className="container mx-auto px-6 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-golden font-medium mb-4">HOW IT WORKS</div>
          <h2 className="text-2xl md:text-4xl font-bold text-navyblue">
            Instant Photoshoots in Three Easy Steps
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
          {[
            {
              img: IMG2,
              title: "Upload Your Garment",
              text: "Upload your attire's front and back pictures for effective AI visualisation.",
            },
            {
              img: IMG1,
              title: "Click Generate",
              text: "Observe our AI perform wonders instantly, creating professional, high-quality visuals.",
            },
            {
              img: IMG,
              title: "Download Your Photoshoot",
              text: "Get a ready collection of high-quality images with different poses for your campaigns.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="bg-white h-48 rounded-3xl shadow-lg p-6 mb-6 w-full">
                <motion.div
                  className="bg-gray-50 rounded-xl p-4 mb-2 inline-block"
                  whileHover={{ rotate: 10 }}
                >
                  <img src={step.img} className="w-8 h-8" alt={step.title} />
                </motion.div>
                <div className="space-y-2">
                  <p className="text-black font-medium">{step.title}</p>
                  <span className="text-sm text-gray-500">{step.text}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}