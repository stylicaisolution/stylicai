import React from "react";
import { testimonialsData } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './style.css'

const Testimonial = () => {
  return (
    <div className="flex bg-gray-50 flex-col items-center justify-center my-2 px-4 md:px-12 py-12">
      <h1 className="text-3xl text-center px-4 sm:text-4xl font-semibold mb-2 text-navyblue">
        What our customers have to say!
      </h1>

      <div className="w-full h-50 py-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {testimonialsData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/20 p-6 rounded-lg shadow-md border w-96 m-auto cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
                <div className="flex flex-col items-center">
                  <img
                    src={data.image}
                    alt={`${data.name}'s profile`}
                    className="rounded-full w-14 h-14 object-cover"
                  />
                  <h2 className="text-xl font-semibold mt-3">{data.name}</h2>
                  <p className="text-gray-500 mb-4">{data.role}</p>
                  <p className="text-gray-600 text-sm text-justify">
                    {data.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
