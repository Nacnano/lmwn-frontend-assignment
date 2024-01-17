// LoadingMenuDetails.tsx

import React from "react";

const LoadingMenuDetails: React.FC = () => {
  return (
    <div className={`border rounded-md mb-4 transition shadow-md`}>
      <div
        className={`flex flex-col justify-between w-full h-full animate-pulse`}
      >
        <div>
          <div className="bg-gray-200 rounded-t-md w-full h-40 flex justify-center items-center"></div>
          <div className="px-4">
            <h2 className="bg-gray-200 rounded-lg my-2 w-2/3 h-8 " />
          </div>
        </div>

        <div className="px-4 flex flex-col justify-between h-auto">
          <div className="my-2 flex justify-between">
            <p className="bg-gray-200 rounded-lg my-2 w-2/5 h-5 text-left" />
            <p className="bg-gray-200 rounded-lg my-2 w-1/3 h-5 text-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingMenuDetails;
