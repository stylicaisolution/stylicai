import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import LazyLoad from "react-lazyload";

import front_blazer from "../../assets/model webp/blazer/1.webp";
import back_blazer from "../../assets/model webp/blazer/2.webp";

import front_boxer from "../../assets/model webp/boxer/1.webp";
import back_boxer from "../../assets/model webp/boxer/2.webp";

import front_bra from "../../assets/model webp/bra/1.webp";
import back_bra from "../../assets/model webp/bra/2.webp";

import front_camisole from "../../assets/model webp/camisole/1.webp";
import back_camisole from "../../assets/model webp/camisole/2.webp";

import front_girl_shirt from "../../assets/model webp/girl shirt/1.webp";
import back_girl_shirt from "../../assets/model webp/girl shirt/2.webp";

import front_inner from "../../assets/model webp/inner/1.webp";
import back_inner from "../../assets/model webp/inner/2.webp";

import front_jacket from "../../assets/model webp/jacket/1.webp";
import back_jacket from "../../assets/model webp/jacket/2.webp";

import front_jaeans from "../../assets/model webp/jeans/1.webp";
import back_jaeans from "../../assets/model webp/jeans/2.webp";

import front_shirt from "../../assets/model webp/shirt/1.webp";
import back_shirt from "../../assets/model webp/shirt/2.webp";

import front_sw_shirt from "../../assets/model webp/sw shirt/1.webp";
import back_sw_shirt from "../../assets/model webp/sw shirt/2.webp";

import front_top from "../../assets/model webp/top/1.webp";
import back_top from "../../assets/model webp/top/2.webp";

import front_tshirt from "../../assets/model webp/tshirt/1.webp";
import back_tshirt from "../../assets/model webp/tshirt/2.webp";

export default function MyCarousle() {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(false);
  const [enableSwipe] = useState(true);
  const [animationConfig] = useState(config.gentle);
  const [startX, setStartX] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_blazer} alt="1" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_girl_shirt} alt="2" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_shirt} alt="3" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_sw_shirt} alt="4" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_boxer} alt="5" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_top} alt="6" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_camisole} alt="7" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_jaeans} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_bra} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_tshirt} alt="8" />
    },
    {
      key: uuidv4(),
      content: <img className=" w-[500px]" src={front_jacket} alt="8" />
    }
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));

  // const items = [
  //   {
  //     id: uuidv4(),
  //     content:<img src={blazerThumbnails[0]}></img>,
  //     //rightImage: blazerImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content:<img src={girlShirtThumbnails[0]}></img>,
  //     // rightImage: girlShirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boysShirtThumbnails[1]}></img>,
  //     // rightImage: boysShirtImages[1][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={sweetShirtThumbnails[0]}></img>,
  //     // rightImage: sweetShirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boxerThumbnails[0]}></img>,
  //     // rightImage: boxerImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={topThumbnails[0]}></img>,
  //     // rightImage: topImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={camisoleThumbnails[0]}></img>,
  //     // rightImage: camisoleImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={jeansThumbnails[0]}></img>,
  //     // rightImage: jeansImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={dressThumbnails[0]}></img>,
  //     // rightImage: dressImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={boysJeansThumbnails[0]}></img>,
  //     // rightImage: boysJeansImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={braThumbnails[0]}></img>,
  //     // rightImage: braImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={tshirtThumbnails[0]}></img>,
  //     rightImage: tshirtImages[0][0],
  //   },
  //   {
  //     id: uuidv4(),
  //     content: <img src={jacketThumbnails[0]}></img>,
  //     // rightImage: jacketImages[0][0],
  //   },
  // ].map((slide, index) => ({
  //   ...slide,
  //   onClick: () => setGoToSlide(index)
  // }));

  const handleTouchStart = (event) => {
    const firstTouch = event.touches[0];
    setStartX(firstTouch.clientX);
  };

  const handleTouchMove = (event) => {
    if (!enableSwipe) return;

    const touch = event.touches[0];
    const diffX = startX - touch.clientX;

    if (diffX > 50) {
      setGoToSlide((prev) => (prev + 1) % slides.length); // Swipe left
    } else if (diffX < -50) {
      setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length); // Swipe right
    }
  };

  return (
    <div className="py-16">
     <div className="flex justify-center items-center">
       <h1 className="text-3xl font-medium mb-8 text-navyblue">Product Slider</h1>
     </div>
     <div
       style={{ width: "80%", height: "500px", margin: "0 auto" }}
       onTouchStart={handleTouchStart}
       onTouchMove={handleTouchMove}
     >
       <Carousel
         slides={slides}
         goToSlide={goToSlide}
         offsetRadius={offsetRadius}
         showNavigation={showNavigation}
         animationConfig={animationConfig}
       />
    </div>
    </div>
  );
}
