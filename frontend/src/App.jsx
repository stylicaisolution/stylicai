import React, { useState, useRef, useEffect } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catalog from "./pages/Catalog/Catalog";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import About from "./components/Aboutus/About";
import MRegister from "./pages/ManagerRegister/MRegister";
import About from "./pages/Aboutus/About";
import Contactus from "./pages/Contact-us/Contactus";
import ShowCase from "./pages/showcase/ShowCase";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Policy from "./pages/PrivacyPolicy/Policy";
import Terms from "./pages/TermsAndCondition/Terms";
import AnimatedCursor from "react-animated-cursor";
import { Check, Camera } from "lucide-react";
import Blog from "./components/Blogs/Blog";
import Blogpage from "./components/Blogs/Blogpage";

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <BrowserRouter>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 transition-transform duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: "-20px",
          top: "-20px",
        }}
      >
        <div className="relative flex items-center justify-center">
          {/* Outer Glow Effect */}
          <div className="absolute w-14 h-14 bg-golden opacity-30 rounded-full blur-xl animate-pulse"></div>

          {/* Camera Icon with Inner Shadow */}
          <div className="bg-white p-3 rounded-full shadow-lg border border-golden">
            <Camera className="w-7 h-7 text-golden transition-transform duration-200 transform hover:scale-110" />
          </div>
        </div>
      </div>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/showcase"
          element={
            <>
              <Navbar />
              <ShowCase />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/about-us"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <Contactus />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/Blog/:id"
          element={
            <>
              <Navbar />
              <Blogpage />
              <Footer />
            </>
          }
        />
        <Route
          path="/registeruser"
          element={
            <>
              <Navbar />
              <MRegister />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <Policy />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/terms-and-condition"
          element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
