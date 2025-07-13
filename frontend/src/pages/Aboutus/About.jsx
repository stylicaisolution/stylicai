import { useState, useEffect } from "react";
import img from "../../assets/Abou.jpg";
import pf1 from "../../assets/profile_img_1.png";
import pf2 from "../../assets/profile_img_2.png";
import pf3 from "../../assets/profile_img_4.png";
import { motion } from "framer-motion";
import { LinearProgress, Box } from "@mui/material";

import BreadCrub from "../../components/BreadCrub";

export default function About() {
  // Carousel data

  const [isMobileSize, setIsMobileSize] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    { id: 1, label: "Happy Customers", progress: 70, count: 100 },
    { id: 2, label: "Total Photos", progress: 70, count: 1000 },
    { id: 3, label: "Total Photoshoots", progress: 70, count: 500 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 550);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, []);

  const carouselTexts = [
    {
      text: "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
      name: "Lete Mehari",
      title: "Customer",
      img: pf1,
    },
    {
      text: "I am so pleased with this product. Absolutely wonderful! You wouldn't regret it. It's really wonderful. Definitely worth the investment.",
      name: "Gabriel Bisrat",
      title: "Customer",
      img: pf2,
    },
    {
      text: "We've used web design agency for the last five years. We can't understand how we've been living without it. Thank you!",
      name: "Aziz Amanuel",
      title: "Customer",
      img: pf3,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselTexts.length]);

  return (
    <div className="min-h-screen bg-white">
      <BreadCrub></BreadCrub>
      <div className="w-full"></div>
      {/* Main Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-20 md:pt-44 pb-28 md:px-12">
        {/* Left Section with Circular Image */}
        {/* <div className="relative flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-full w-80 h-80 md:w-96 md:h-96 shadow-lg">
              <img
                src={img} // Replace with your actual imported image
                alt="Design Solution"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div> */}

        {/* <div className="relative h-96 w-96 rounded-full overflow-hidden">
          <motion.div
            className="w-full absolute h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path
                id="circlePath"
                d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                fill="none"
                className="border border-red-500"
                stroke="#f3f4f6"
                strokeWidth="70"
                strokeLinecap="round"
              />

              <text className="text-3xl text-gray-700">
                <textPath
                  href="#circlePath"
                  startOffset="20%"
                  textAnchor="middle" 
                  dominantBaseline="middle"      
                  spacing="auto"          
                >
                  A I - P H O T O S H O O T
                </textPath>
              </text>
            </svg>
          </motion.div>

          <div className="bg-blue-500 w-1/2 h-full absolute top-0 right-0">
            <img src={img} alt="image" className="h-full w-full object-cover" />
          </div>
        </div> */}

        <div className="relative w-[40vh] h-[40vh] md:h-[70vh] md:w-[70vh] rounded-full overflow-hidden">
          <motion.div
            className="w-full absolute h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path
                id="circlePath"
                d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="70"
                strokeLinecap="round"
              />

              <text className="text-xl fill-gray-700  tracking-[0.7em]">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  dominantBaseline="middle"
                  spacing="40px"
                >
                  S T Y L I C - A I - P H O T O S H O O T
                </textPath>
              </text>
            </svg>
          </motion.div>

          <div className="bg-blue-500 w-1/2 h-full absolute top-0 right-0 flex items-center justify-center">
            <img src={img} alt="image" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex-1 mt-12 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-5xl font-semibold text-navyblue leading-tight mb-6">
            Behold the Future of Design Service
          </h2>
          <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
            Transform the way fashion comes to life with the help of our AI
            technology. From Hyper-Realistic Visuals to Brand Identity
            Revolutionisation, all Innovation is Made Simpler.
          </p>
          <ul className="space-y-4 font-medium text-gray-600">
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Expert
              advice at every step of the way.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Access to
              potent tools and resources.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> AI solutions
              that bring significant results.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Easy to
              integrate into your workflow.
            </li>
            <li className="flex items-center">
              <span className="text-gray-700 text-xl mr-2">✓</span> Optimised
              visuals for a better online presence.
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Section */}
      <div className="container mx-auto px-1 py-20 md:px-12 ">
        <h3 className="text-4xl font-bold text-navyblue mb-12 text-center">
          Why Choose Us?
        </h3>
        <div className="grid px-12 grid-cols-1  md:grid-cols-3 gap-10">
          <div className="bg-white p-8 shadow rounded-lg text-center ">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Exceptional Solutions
            </h4>
            <p className="text-gray-600">
              Fashion photography with the most advanced artificial intelligence
              technologies. Create imagery that mesmerises and makes your brand
              the talk of the town.
            </p>
          </div>
          <div className="bg-white p-8 shadow rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Devoted Team
            </h4>
            <p className="text-gray-600">
              Our enthusiastic experts combine their efforts to provide
              customised solutions that actualise your vision. In return, these
              efforts contribute to raising your brand status and visibility.
            </p>
          </div>
          <div className="bg-white p-8 shadow rounded-lg text-center">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">
              Proven Results
            </h4>
            <p className="text-gray-600">
              With a global track record of success, we empower brands with
              impactful visuals, leaving a lasting impression on audiences.
            </p>
          </div>
        </div>
      </div>

      {/* Work Impression */}
      {/* <div className="w-full flex justify-center pb-14">
        <div className="w-full md:w-[86%]">
          <div className="w-full mx-auto text-5xl px-4 md:px-0 md:text-6xl py-10 font-medium">
            <p>Our Work Impressions</p>
          </div>

          <div className="w-full flex flex-col gap-4 md:gap-2 md:flex-row justify-between">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="flex px-4 flex-col gap-2 md:gap-4 w-full md:w-1/3"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    width: "70%",
                    position: "relative",
                    backgroundColor: "#e0e0e0",
                    overflow: "hidden",
                    height: "5px",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={hoveredIndex === index ? stat.progress : 0}
                    sx={{
                      height: "100%",
                      transition: "width 1s ease-in-out",
                      backgroundColor: "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor:
                          hoveredIndex === index ? "#AA9431" : "#e0e0e0",
                      },
                    }}
                  />
                </Box>
                <p className="text-8xl font-bold text-outline text-transparent font-sans">
                  {stat.count}+
                </p>
                <p className="text-xl text-gray-500 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
