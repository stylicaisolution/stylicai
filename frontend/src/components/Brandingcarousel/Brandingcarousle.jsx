import React from "react";
import stylic from "../../assets/Stylic/stylic logo.jpg"
const BrandCarousel = () => {
  // Sample brand data with image URLs
  const brands = [
    { id: 1, imgSrc: stylic },
    { id: 2, imgSrc: stylic },
    { id: 3, imgSrc: stylic },
    { id: 4, imgSrc: stylic },
    { id: 5, imgSrc: stylic },
    { id: 6, imgSrc: stylic },
    
    { id: 1, imgSrc: stylic },
    { id: 2, imgSrc: stylic },
    { id: 3, imgSrc: stylic },
    { id: 4, imgSrc: stylic },
    { id: 5, imgSrc: stylic },
    { id: 6, imgSrc: stylic },
  ];

  // Duplicate the brands array to create seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-white py-4 md:py-16 px-4 md:px-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="py-6 overflow-hidden">
          <div className="flex space-x-10 animate-scroll">
            {duplicatedBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex-none w-52 h-24 rounded-lg flex items-center justify-center shadow"
              >
                <img
                  src={brand.imgSrc}
                  alt={`Brand ${brand.id}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Scroll Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

       
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default BrandCarousel;