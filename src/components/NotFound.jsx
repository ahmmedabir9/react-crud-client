import React from "react";

const NotFound = ({ title, subtitle, size }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-2/3 my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-${size ? size : 36} text-gray-600`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
        />
      </svg>
      <span className="text-3xl font-bold text-gray-600 mt-2">{title}</span>
      <span className="text-sm font-bold text-gray-400">{subtitle}</span>
    </div>
  );
};

export default NotFound;
