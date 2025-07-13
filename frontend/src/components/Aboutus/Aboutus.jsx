import React from "react";
import { Check, Video } from "lucide-react";
import VID from "../../assets/video.mp4";
import { Link } from "react-router-dom";

export default function Aboutus() {
  const features = [
    ["Save Time and Money:", "Create stunning visuals without the expense of traditional setups."],
    ["Unmatched Realism:", "Deliver garments with the help of AI's lifecycle techniques to amaze the viewers."],
    ["Seamless Integration:", "Use your AI-enhanced visuals across e-commerce, ads, and social campaigns effortlessly."]
  ];

  return (
    <div className="bg-white py-20 px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images */}
        <div className="flex justify-center items-center">
          <video
            src={VID}
            autoPlay
            muted
            loop
            className="w-full object-contain h-[500px]"
          ></video>
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div>
            <p className="text-golden font-medium mb-4">ABOUT US</p>
            <p className="text-3xl text-navyblue lg:text-4xl font-bold mb-6">
            Introducing a New and Revolutionary AI Solution to Fashion Images
            </p>
            <p className="text-gray-600 text-base mb-8">
            At Stylic, we redefine fashion marketing by replacing costly, time-consuming photoshoots with cutting-edge AI-driven solutions.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-golden rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-navyblue font-semibold">{`${feature[0]}`} <span className="font-normal text-gray-600">{feature[1]}</span></p>
              </div>
            ))}
          </div>

          <button className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-navyblue transition-colors">
            <Link to={'/about-us'}>About Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}