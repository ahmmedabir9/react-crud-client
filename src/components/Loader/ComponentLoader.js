import React from "react";

const ComponentLoader = ({ height }) => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center animate-pulse"
      style={{ height: height }}
    >
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-8 border-blue-400 border-dotted rounded-full animate-spin"
      ></div>
      <span className="text-sm font-bold text-blue-400 mt-2">LOADING</span>
    </div>
  );
};

export default ComponentLoader;
