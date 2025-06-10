import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Main loading circle */}
        <div className="w-20 h-20 border-4 border-gray-200 dark:border-gray-700 rounded-full animate-spin">
          <div className="w-full h-full border-4 border-transparent border-t-primary rounded-full"></div>
        </div>
        
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 border-2 border-primary-light rounded-full animate-ping"></div>
        </div>
        
        {/* Dots around */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-2 h-2 bg-primary-light rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-2 h-2 bg-primary-light rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-2 h-2 bg-primary-light rounded-full absolute left-0 top-1/2 transform -translate-y-1/2"></div>
          <div className="w-2 h-2 bg-primary-light rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="ml-6">
        <div className="text-xl font-semibold text-gray-800 dark:text-dark-text mb-2 gradient-text">
          Đang tải dữ liệu...
        </div>
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;