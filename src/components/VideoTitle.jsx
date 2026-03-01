import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-24 absolute">
      <h1 className="font-bold text-6xl text-white">{title}</h1>
      <p className="text-lg w-1/3 text-white py-4">{overview}</p>
      <div>
        <button className="bg-white text-black px-6 py-4 text-pretty font-bold rounded-lg  hover:opacity-60">
          ▶ Play
        </button>
        <button className="m-2 px-8 py-4 bg-black bg-opacity-50 text-white rounded-lg hover:opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
