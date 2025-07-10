import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import MyCarousle from "../../components/carousel/MyCarousle";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/PhotoGallery/Gallery";
import Footer from "../../components/Footer/Footer";
import How from "../../components/How/How";
import Faq from "../../components/FAQ/Faq";
import Schedule from "../../components/Sechdule/Sechdule"; // Kept 'Schedule' from main
import Aboutus from "../../components/Aboutus/Aboutus";
// import Testimonial from "../../components/Testimonial/Testimonial"
import BrandCarousel from "../../components/Brandingcarousel/Brandingcarousle";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <How />
      <Aboutus />
      {/* <MyCarousle></MyCarousle> */}
      <Gallery />
      <BrandCarousel></BrandCarousel>
      <Faq/>
      <Schedule></Schedule>
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default Home;