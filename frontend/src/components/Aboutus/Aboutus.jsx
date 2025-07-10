import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import VID from "../../assets/video.mp4";
import { Link } from "react-router-dom";

export default function Aboutus() {
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

  const features = [
    ["Save Time and Money:", "Create stunning visuals without the expense of traditional setups."],
    ["Unmatched Realism:", "Deliver garments with the help of AI's lifecycle techniques to amaze the viewers."],
    ["Seamless Integration:", "Use your AI-enhanced visuals across e-commerce, ads, and social campaigns effortlessly."]
  ];

  return (
    <div ref={sectionRef} className="bg-white py-20 px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Video */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <video
            src={VID}
            autoPlay
            muted
            loop
            className="w-full object-contain h-[500px] rounded-lg shadow-xl"
          ></video>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <motion.p
              className="text-golden font-medium mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ABOUT US
            </motion.p>
            <motion.p
              className="text-3xl text-navyblue lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Introducing a New and Revolutionary AI Solution to Fashion Images
            </motion.p>
            <motion.p
              className="text-gray-600 text-base mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              At Stylic, we redefine fashion marketing by replacing costly, time-consuming photoshoots with cutting-edge AI-driven solutions.
            </motion.p>
          </div>

          {/* Features with Animation */}
          <motion.div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  className="bg-golden rounded-full p-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
                <p className="text-navyblue font-semibold">
                  {feature[0]} <span className="font-normal text-gray-600">{feature[1]}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Button with Hover Animation */}
          <motion.button
            className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-navyblue transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={"/about-us"}>About Us</Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}