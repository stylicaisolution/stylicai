import React,{useState} from "react";
import { Link } from "react-router-dom";

const Sechdule = () => {
  const [openCalendlyPopup, setOpenCalendyPopUp] = useState(false);

  return (
    <>
      {openCalendlyPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 h-screen iframe-no-scroll rounded-lg shadow-lg w-11/12 md:w-1/2 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenCalendyPopUp(false)}
              className="absolute top-1 right-1 bg-golden text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <iframe
              src="https://calendly.com/stylicai/product-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a99431&month=2025-02"
              title="calendy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
      <div className="md:py-20 px-8 py-4">
        <div className="bg-gray-50 shadow p-8 rounded-lg max-w-6xl mx-auto relative my-16">
          {/* Main Content Section */}
          <div className="max-w-2xl">
            <h1 className="text-[#1E335C] text-2xl md:text-4xl font-bold mb-4">
              Walk into the Future of Fashion Imagery with Stylic
            </h1>
            <button
              className="bg-golden text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E335C] transition-colors"
              onClick={() => setOpenCalendyPopUp(true)}
            >
              Schedule a demo
              {/* <Link to={"/contactus"}>Schedule a demo</Link> */}
            </button>
          </div>

          {/* Achievement Cards */}
          <div className="absolute md:block hidden right-8 -top-16 space-y-4 max-w-xs">
            {/* APJ Card */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
              <p className="text-gray-600">
                Get ready to realise the full potential of product photography,
                which is both time and cost-effective, not to mention as
                realistic as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sechdule;
