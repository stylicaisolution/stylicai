import { useState, useEffect, useRef } from "react";
import img from "../../assets/Abou.jpg";
import { motion, useInView } from "framer-motion";
import { LinearProgress, Box } from "@mui/material";
import BreadCrub from "../../components/BreadCrub";

export default function About() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { id: 1, label: "Happy Customers", progress: 70, count: 100 },
    { id: 2, label: "Total Photos", progress: 70, count: 1000 },
    { id: 3, label: "Total Photoshoots", progress: 70, count: 500 },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobileSize(window.innerWidth <= 550);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <BreadCrub />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-20 md:pt-44 pb-28 md:px-12">
        {/* Rotating Text & Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[40vh] h-[40vh] md:h-[70vh] md:w-[70vh] rounded-full overflow-hidden"
        >
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
              <text className="text-xl fill-gray-700 tracking-[0.7em]">
                <textPath href="#circlePath" startOffset="0%">
                  S T Y L I C - A I - P H O T O S H O O T
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div className="bg-blue-500 w-1/2 h-full absolute top-0 right-0 flex items-center justify-center">
            <img src={img} alt="image" className="h-full w-full object-cover" />
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mt-12 md:mt-0 md:ml-12 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-navyblue leading-tight mb-6">
            Behold the Future of Design Service
          </h2>
          <p className="text-gray-800 font-medium text-lg leading-relaxed mb-8">
            Transform the way fashion comes to life with the help of our AI technology.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="w-full flex justify-center pb-14">
        <div className="w-full md:w-[86%]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full mx-auto text-5xl sm:text-4xl md:text-6xl px-4 md:px-0 py-10 font-medium"
          >
            <p>Our Work Impressions</p>
          </motion.div>

          <div className="w-full flex flex-col gap-4 md:gap-2 md:flex-row justify-between">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex px-4 flex-col gap-2 md:gap-4 w-full md:w-1/3"
              >
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    backgroundColor: "#e0e0e0",
                    height: "5px",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={isInView ? stat.progress : 0}
                    sx={{
                      height: "100%",
                      transition: "width 1.5s ease-in-out",
                      backgroundColor: "#e0e0e0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#AA9431",
                      },
                    }}
                  />
                </Box>
                <p className="text-6xl md:text-8xl font-bold text-outline text-transparent font-sans">
                  {stat.count}+
                </p>
                <p className="text-lg md:text-xl text-gray-500 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}