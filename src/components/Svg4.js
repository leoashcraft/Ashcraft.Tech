import React from "react";

function Svg4() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 64 64"
      xmlSpace="preserve"
    >
      <path
        fill="none"
        stroke="white"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M1 21c0 20 31 38 31 38s31-18 31-38c0-8.285-6-16-15-16-8.285 0-16 5.715-16 14 0-8.285-7.715-14-16-14C7 5 1 12.715 1 21z"
      ></path>
    </svg>
  );
}

export default React.memo(Svg4);
