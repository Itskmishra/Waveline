import React from "react";

const DottedEffect = () => {
  return (
    <div>
      <span className="absolute right-0 top-7 z-[-1]">
        <svg
          width="77"
          height="172"
          viewBox="0 0 77 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="86"
              y1="0"
              x2="86"
              y2="172"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.09" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-4 top-4 z-[-1]">
        <img src="circle.svg" alt="" />
      </span>
    </div>
  );
};

export default DottedEffect;
