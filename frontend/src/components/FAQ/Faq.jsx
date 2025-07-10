import React, { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  const faqData = [
    {
      question: 'What kinds of clothing can I upload for AI visualisation?',
      answer: "You are free to post any category of clothes, starting with dresses, tops, and pants and finishing with jackets. However, make sure you have clear front and back images for the highest possible quality of the scan."
    },
    {
      question: 'What amount of time is taken to produce images?',
      answer: "This AI can generate high-quality images quickly. The generated pictures will probably be ready for downloading in just a 12-24 hours after the requests are submitted."
    },
    {
      question: 'Can I use these generated images on various platforms?',
      answer: "Absolutely! The images are created to be easily used on your e-commerce websites, social media, and advertising campaigns."
    },
    {
      question: 'Do you have any recommended format when it comes to image uploads?',
      answer: "You should input high-resolution image formats such as JPEG or PNG file formats. Be sure that the images have good illumination to support better AI visualisation performance."
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gray-50 p-8">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <p className="text-golden font-medium mb-4">FAQ'S</p>
          <h1 className="text-2xl text-navyblue lg:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              className="border rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-left">
                  {faq.question}
                </span>
                <span className="text-golden">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div 
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
