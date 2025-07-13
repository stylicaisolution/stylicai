import React from 'react';
// import Bird from '../../assets/Bird.webp'

//importing icons
import IMG from '../../assets/downloads.png'
import IMG1 from '../../assets/ai.png'
import IMG2 from '../../assets/upload.png'

export default function How()  {
  return (
    <div className="w-full bg-gray-50 py-16 md:py-12">
      <div className="containe mx-auto px-6 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-golden font-medium mb-4">HOW IT WORKS</div>
          <h2 className="text-2xl md:text-4xl font-bold text-navyblue">
          Instant Photoshoots in Three Easy Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white h-48 rounded-3xl shadow-lg p-6 mb-6 w-full">
              <div className="bg-gray-50 rounded-xl p-4 mb-2 inline-block">
                <img src={IMG2} className='w-8 h-8'></img>
              </div>
              <div className="space-y-2">
                <p className="text-black font-medium">
                Upload Your Garment
                </p>
                <span className='text-sm text-gray-500'>Upload your attire's front and back pictures for effective AI visualisation.</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white h-48 rounded-3xl shadow-lg p-6 mb-6 w-full">
              <div className="bg-gray-50 rounded-xl p-4 mb-2 inline-block">
                <img src={IMG1} className='w-8 h-8'></img>
              </div>
              <div className="space-y-2">
                <p className="text-black font-medium">
                  Click Generate
                </p>
                <span className='text-sm text-gray-500'>Observe our AI perform wonders instantly, creating professional, high-quality visuals.</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white h-48 rounded-3xl shadow-lg p-6 mb-6 w-full">
              <div className="bg-gray-50 rounded-xl p-4 mb-2 inline-block">
                <img src={IMG} className='w-8 h-8'></img>
              </div>
              <div className="space-y-2">
                <p className="text-black font-medium">
                Download Your Photoshoot
                </p>
                <span className='text-sm text-gray-500'>Get a ready collection of high-quality images with different poses for your campaigns.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

