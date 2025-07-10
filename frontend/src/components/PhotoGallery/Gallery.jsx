import React, { useRef, useCallback, useState, useEffect } from "react";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import {
  blazerThumbnails,
  blazerImages,
  girlShirtThumbnails,
  girlShirtImages,
  boysShirtThumbnails,
  boysShirtImages,
  sweetShirtThumbnails,
  sweetShirtImages,
  boxerThumbnails,
  boxerImages,
  topThumbnails,
  topImages,
  camisoleImages,
  camisoleThumbnails,
  jeansThumbnails,
  jeansImages,
  dressThumbnails,
  dressImages,
  boysJeansThumbnails,
  boysJeansImages,
  braThumbnails,
  braImages,
  tshirtThumbnails,
  tshirtImages,
  jacketThumbnails,
  jacketImages,
  minnerThumbnails,
  minnerImages
} from "../../assets/assets.js";

// Importing Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = {
    blazer: {
      thumbnails: blazerThumbnails,
      images: blazerImages,
    },
    "girl's shirt": {
      thumbnails: girlShirtThumbnails,
      images: girlShirtImages,
    },
    "boy's shirt": {
      thumbnails: boysShirtThumbnails,
      images: boysShirtImages,
    },
    "sweat shirt": {
      thumbnails: sweetShirtThumbnails,
      images: sweetShirtImages,
    },
    boxer: {
      thumbnails: boxerThumbnails,
      images: boxerImages,
    },
    top: {
      thumbnails: topThumbnails,
      images: topImages,
    },
    camisole: {
      thumbnails: camisoleThumbnails,
      images: camisoleImages,
    },
    // jeans: {
    //   thumbnails: jeansThumbnails,
    //   images: jeansImages,
    // },
    dress: {
      thumbnails: dressThumbnails,
      images: dressImages,
    },
    "boy's jeans": {
      thumbnails: boysJeansThumbnails,
      images: boysJeansImages,
    },
    lingerie: {
      thumbnails: braThumbnails,
      images: braImages,
    },
    "t-shirt": {
      thumbnails: tshirtThumbnails,
      images: tshirtImages,
    },
    jacket: {
      thumbnails: jacketThumbnails,
      images: jacketImages,
    },
    "men's inner":{
      thumbnails : minnerThumbnails,
      images : minnerImages
    }
  };

  const [activeCategory, setActiveCategory] = useState("blazer");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    categories["blazer"]?.images[0][0]
  );
  const [activeTypes, setActiveTypes] = useState(
    categories["blazer"]?.images[0]
  );

  const handleCategoryChange = useCallback(
    (category) => {
      setActiveCategory(category);
      setActiveTypes(categories[category].images[0]);
      setSelectedImage(categories[category].images[0][0]);
      setActiveIndex(0);
    },
    [categories]
  );

  // Memoize image click handler
  const handleImageClick = useCallback(
    (index) => {
      setSelectedImage(activeTypes[index]);
    },
    [activeTypes]
  );

  // Memoize thumbnail click handler
  const handleThumbnailClick = useCallback(
    (index) => {
      setActiveIndex(index);
      setActiveTypes(categories[activeCategory].images[index]);
      setSelectedImage(categories[activeCategory].images[index][0]);
    },
    [activeCategory, categories]
  );

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = document.querySelector(".swiper").swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="min-h-screen py-4 text-navyblue relative bg-gray-50 pb-14">
      {/* Header Section */}
      <div className="w-full text-center py-10 px-6 flex flex-col gap-y-5">
        <p className="text-4xl font-bold">
        Walk into the Future of Fashion Imagery with Stylic
        </p>
        <p className="text-base text-gray-600">
        With Stylic, you can create stunning, lifelike product imagery. All at a fast, affordable, and seamless photoshoot, <br></br>elevating the visual storytelling of your brand.
        </p>
      </div>

      {/* Category Section */}
      <div className="relative w-full mb-6 py-4">
        <div
          ref={prevRef}
          className="swiper-button-prev-custom w-7 h-7 ml-8 lg:ml-44 md:ml-32 flex justify-center items-center absolute left-0 top-9 md:top-1/2 transform -translate-y-1/2 bg-navyblue text-white p-2 rounded-full cursor-pointer hover:bg-gray-700 z-10"
        >
          &#8249;
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom w-7 h-7 md:mr-32 flex justify-center items-center text-center mr-8 lg:mr-44 absolute right-0 top-9 md:top-1/2 transform -translate-y-1/2 bg-navyblue text-white p-2 rounded-full cursor-pointer hover:bg-gray-700 z-10"
        >
          &#8250;
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          className="rounded-lg overflow-hidden w-8/12 flex justify-center items-center"
          breakpoints={{
            1200: { slidesPerView: 5, spaceBetween: 20 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 10 },
            576: { slidesPerView: 3, spaceBetween: 10 },
            0: { slidesPerView: 2, spaceBetween: 5 },
          }}
        >
          {Object.keys(categories).map((category) => (
            <SwiperSlide key={category}>
              <button
                aria-pressed={activeCategory === category}
                className={`border w-28 mx-1 lg:mx-4 lg:w-32 rounded-full md:rounded-full py-2 transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#1b345c] text-white font-semibold"
                    : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Content */}
      <div className="flex md:flex-row flex-col px-8 gap-6 flex-wrap lg:flex-row w-full">
        {/* Left Section */}
        <div className="lg:w-[40%] w-full flex justify-center items-center">
          <div className="w-full h-full">
            <img
              src={selectedImage}
              alt="Model"
              className="h-full w-full object-fill rounded-md shadow-lg pb-10 lg:pb-0"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[55%] w-full bg-white/70 backdrop-blur-md py-10 px-6 rounded-md border border-gray-300 flex flex-col">
          {/* Thumbnail Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CheckroomIcon style={{ color: "#3f3f3f" }} />
              <p className="text-[#3f3f3f] font-medium text-xl">Garments</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {categories[activeCategory]?.thumbnails
                .slice(0, 4)
                .map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`rounded-md shadow-lg cursor-pointer overflow-hidden ${
                      activeIndex === index
                        ? "border-4 border-[#1b345c]"
                        : "border border-transparent"
                    }`}
                  >
                    <img
                      src={item}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Photoshoot Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CameraAltOutlinedIcon />
              <p className="text-[#3f3f3f] font-medium text-xl">Photoshoot</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {activeTypes.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`rounded-md shadow-lg cursor-pointer overflow-hidden ${
                    selectedImage === item
                      ? "border-4 border-[#1b345c]"
                      : "border border-transparent"
                  }`}
                >
                  <img
                    src={item}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
