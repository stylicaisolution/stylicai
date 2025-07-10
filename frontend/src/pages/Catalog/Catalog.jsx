import React, { useCallback, useEffect, useRef, useState } from "react";
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
  minnerImages,
  minnerThumbnails
} from "../../assets/assets.js";

//Importigng swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Catalog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prevRef1 = useRef(null);
  const nextRef1 = useRef(null);

  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);

  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 550);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileSize]);

  const categories = {
    blazers: {
      thumbnails: blazerThumbnails,
      images: blazerImages,
    },
    "girl's shirts": {
      thumbnails: girlShirtThumbnails,
      images: girlShirtImages,
    },
    "boys shirts": {
      thumbnails: boysShirtThumbnails,
      images: boysShirtImages,
    },
    "sweat shirts": {
      thumbnails: sweetShirtThumbnails,
      images: sweetShirtImages,
    },
    boxers: {
      thumbnails: boxerThumbnails,
      images: boxerImages,
    },
    tops: {
      thumbnails: topThumbnails,
      images: topImages,
    },
    camisoles: {
      thumbnails: camisoleThumbnails,
      images: camisoleImages,
    },
    jeans: {
      thumbnails: jeansThumbnails,
      images: jeansImages,
    },
    dresses: {
      thumbnails: dressThumbnails,
      images: dressImages,
    },
    "boys jeans": {
      thumbnails: boysJeansThumbnails,
      images: boysJeansImages,
    },
    lingerie: {
      thumbnails: braThumbnails,
      images: braImages,
    },
    "t-shirts": {
      thumbnails: tshirtThumbnails,
      images: tshirtImages,
    },
    jackets: {
      thumbnails: jacketThumbnails,
      images: jacketImages,
    },
    "mens inner":{
      thumbnails : minnerThumbnails,
      images : minnerImages
    }
  };

  const firstRow = Object.keys(categories).slice(0, 5);
  const secondRow = Object.keys(categories).slice(5, 9);
  const thirdRow = Object.keys(categories).slice(9, 14);

  const [activeCategory, setActiveCategory] = useState("blazers");
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(
    categories["blazers"]?.images[0][0]
  );
  const [activeTypes, setActiveTypes] = useState(
    categories["blazers"].images[0]
  );
  console.log(activeTypes);
  

  // Handle Category Change
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

  return (
    <>
      <div className="min-h-screen text-navyblue relative bg-white py-24">
        {/* Header Section */}
        <div className="w-full px-4 text-center py-10 flex flex-col gap-y-5 bg-white">
          <p className="text-4xl text-center font-bold">
            Experience Stylic's AI Photoshoot Today
          </p>
          <p className="text-base md:text-xl text-gray-600">
            Experience the future of product photography with Stylic AI-driven
            photoshoots,<br></br> delivering high-quality, captivating images in
            no time.
          </p>
        </div>

        {/* category section with swiper js */}

        {isMobileSize && (
          <div className="relative w-full mb-6 p-4">
            <div
              ref={prevRef}
              className="swiper-button-prev-custom w-7 h-7 ml-8 lg:ml-44 flex justify-center items-center absolute left-0 top-9 md:top-1/2 transform -translate-y-1/2 bg-navyblue text-white p-2 rounded-full cursor-pointer hover:bg-gray-700 "
            >
              &#8249;
            </div>
            <div
              ref={nextRef}
              className="swiper-button-next-custom w-7 h-7 flex justify-center items-center text-center mr-8 lg:mr-44 absolute right-0 top-9 md:top-1/2 transform -translate-y-1/2 bg-navyblue text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
            >
              &#8250;
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2}
              loop={true}
              className="rounded-lg overflow-hidden w-8/12 flex justify-center items-center"
              breakpoints={{
                1200: { slidesPerView: 5, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 10 },
                576: { slidesPerView: 3, spaceBetween: 10 },
                0: { slidesPerView: 2, spaceBetween: 5 },
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {Object.keys(categories).map((category) => (
                <SwiperSlide key={category}>
                  <button
                    aria-pressed={activeCategory === category}
                    className={`border w-28 lg:w-32 rounded-full  p-2 transition-all duration-200 ${
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
        )}

        {!isMobileSize && (
          <div className="relative w-full mb-6 p-4 flex flex-col gap-4">
            {/* First Row (5 items) */}
            <div className="w-full mx-auto flex  gap-4 justify-center">
              {firstRow.map((category) => (
                <button
                  key={category}
                  className={`border w-28 lg:w-32 border-[#1b345c] rounded-full sm:p-2  lg:p-3 py-2 transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[#1b345c] text-white font-semibold"
                      : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Second Row (4 items) */}
            <div className="w-full mx-auto flex flex-wrap gap-4 justify-center">
              {secondRow.map((category, index) => (
                <button
                  key={index}
                  className={`border w-28 lg:w-32 border-[#1b345c] rounded-full p-2 lg:p-3 transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[#1b345c] text-white font-semibold"
                      : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Third Row (4 items) */}
            <div className="w-full mx-auto flex flex-wrap gap-4 justify-center">
              {thirdRow.map((category) => (
                <button
                  key={category}
                  className={`border w-28 lg:w-32 border-[#1b345c] rounded-full p-2 lg:p-3 transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[#1b345c] text-white font-semibold"
                      : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-wrap lg:flex-row w-full">
          {/* Left Section - Image */}
          <div className="lg:w-[40%] w-full flex justify-center items-center">
            <div className="lg:w-3/4 w-4/5 h-full">
              <img
                src={selectedImage}
                alt="Model"
                className="h-full w-full object-fill rounded-md shadow-lg pb-10 lg:pb-0"
              />
            </div>
          </div>

          {/* Right Section - Transparent Div with Dynamic Height */}
          <div className="lg:w-[55%] relative w-full bg-white/70 backdrop-blur-md py-10 px-6 rounded-md border border-gray-300 flex flex-col">
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <CheckroomIcon style={{ color: "#3f3f3f" }} />
                <p className="text-[#3f3f3f] font-medium text-xl">Product</p>
              </div>

              {/* Previous Button */}
              {/* <div
                ref={prevRef1}
                className="swiper-button-prev-custom w-7 h-7 flex justify-center items-center absolute -ml-8  top-2/3  transform -translate-y-1/2 bg-navyblue text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
              >
                &#8249;
              </div> */}

              {/* Next Button */}
              {/* <div
                ref={nextRef1}
                className="swiper-button-next-custom w-7 h-7 flex justify-center items-center absolute right-4  -mr-12  top-2/3 transform -translate-y-1/2 bg-navyblue text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
              >
                &#8250;
              </div> */}

              <div className="w-full relative  flex items-center border">
                <Swiper
                  modules={[Navigation]}
                  lazyPreloadPrevNext={true}
                  spaceBetween={20}
                  slidesPerView={4}
                  loop={true}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl = prevRef1.current;
                      swiper.params.navigation.nextEl = nextRef1.current;
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  className="rounded-lg overflow-hidden"
                  breakpoints={{
                    1200: { slidesPerView: 4, spaceBetween: 20 },
                    992: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 4, spaceBetween: 10 },
                    576: { slidesPerView: 3, spaceBetween: 10 },
                    0: { slidesPerView: 2, spaceBetween: 5 },
                  }}
                >
                  {categories[activeCategory].thumbnails.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        onClick={() => handleThumbnailClick(index)}
                        className={`w-full md:h-60 h-52 rounded-md shadow-lg cursor-pointer overflow-hidden ${
                          activeIndex === index
                            ? "border-4 border-[#1b345c]"
                            : "border border-transparent"
                        }`}
                      >
                        <img
                          src={item}
                          alt={`Product ${index + 1}`}
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Photoshoot Section */}
            <div className="relative">
              <div className="flex items-center gap-2 mb-6 mt-4">
                <CameraAltOutlinedIcon />
                <p className="text-[#3f3f3f] font-medium text-xl">Photoshoot</p>
              </div>

              {/* <div className="grid grid-cols-4 lg:grid-cols-4 gap-4"> */}

              {/* <div
                ref={prevRef2}
                className="swiper-button-prev-custom w-7 h-7 flex justify-center items-center absolute -ml-8  top-2/3  transform -translate-y-1/2 bg-navyblue text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
              >
                &#8249;
              </div> */}

              {/* Next Button */}
              {/* <div
                ref={nextRef2}
                className="swiper-button-next-custom w-7 h-7 flex justify-center items-center absolute right-4  -mr-12  top-2/3 transform -translate-y-1/2 bg-navyblue text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
              >
                &#8250;
              </div> */}

              <Swiper
                modules={[Navigation]}
                lazyPreloadPrevNext={true}
                spaceBetween={20}
                slidesPerView={8}
                loop={true}
                navigation={{
                  prevEl: prevRef2.current,
                  nextEl: nextRef2.current,
                }}
                onSwiper={(swiper) => {
                  // Delay execution for the refs to be defined
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = prevRef2.current;
                    swiper.params.navigation.nextEl = nextRef2.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                className="rounded-lg overflow-hidden"
                breakpoints={{
                  // When the screen width is >= 1200px
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // When the screen width is >= 992px
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  // When the screen width is >= 768px
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  // When the screen width is >= 576px
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  // When the screen width is < 576px
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                }}
              >
                {activeTypes.map((item, index) => (
                  <SwiperSlide>
                    <div
                      key={index}
                      onClick={() => handleImageClick(index)}
                      className={`w-full rounded-md h-48 md:h-full shadow-lg cursor-pointer overflow-hidden ${
                        
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
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;