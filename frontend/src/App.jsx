import React from "react";
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
import Blog from "./components/Blogs/Blog";
import Blogpage from "./components/Blogs/Blogpage";

const App = () => {
  return (
    <BrowserRouter>
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
