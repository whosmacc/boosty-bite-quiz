
import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

const DesktopBlock = () => {
  return (
    <div className="desktop-block hidden min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 items-center justify-center p-8">
      <div className="max-w-md text-center animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Monitor className="w-24 h-24 text-gray-400" />
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-2">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Mobile Experience Only
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          BoostyLite is designed exclusively for mobile devices. 
          Please visit this site on your smartphone for the best experience.
        </p>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-orange-500 mr-3" />
            <span className="text-orange-600 font-semibold">Scan QR Code</span>
          </div>
          <div className="w-32 h-32 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
            <span className="text-gray-400 text-sm">QR Code Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopBlock;
