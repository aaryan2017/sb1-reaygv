import React from 'react';

const BirthChart = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Birth Chart</h3>
      <div className="aspect-square relative">
        <div className="absolute inset-0 border-2 border-purple-300/30 rounded-lg transform rotate-45">
          <div className="absolute inset-4 border-2 border-purple-300/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-sm font-medium">Lagna</div>
              <div className="text-xs text-purple-200">Taurus</div>
            </div>
          </div>
          {/* Chart divisions */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 h-full w-0.5 bg-purple-300/30 transform -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-300/30 transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthChart;