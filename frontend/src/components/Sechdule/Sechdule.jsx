import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Schedule = () => {
  const [openCalendlyPopup, setOpenCalendyPopUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (openCalendlyPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openCalendlyPopup]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence>
        {openCalendlyPopup && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 h-screen rounded-lg shadow-lg w-11/12 md:w-1/2 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpenCalendyPopUp(false)}
                className="absolute top-1 right-1 bg-golden text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
              <iframe
                src="https://calendly.com/stylicai/product-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a99431&month=2025-02"
                title="calendy"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        className="md:py-20 px-8 py-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="bg-gray-50 shadow p-8 rounded-lg max-w-6xl mx-auto relative my-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div className="max-w-2xl">
            <h1 className="text-[#1E335C] text-2xl md:text-4xl font-bold mb-4">
              Walk into the Future of Fashion Imagery with Stylic
            </h1>
            <motion.button
              className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E335C] transition-colors"
              onClick={() => setOpenCalendyPopUp(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a demo
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute md:block hidden right-8 -top-16 space-y-4 max-w-xs"
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
              <p className="text-gray-600">
                Get ready to realise the full potential of product photography,
                which is both time and cost-effective, not to mention as
                realistic as possible.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Schedule;