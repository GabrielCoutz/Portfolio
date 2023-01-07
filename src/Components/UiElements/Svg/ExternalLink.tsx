import React from "react";

const ExternalLink = ({ color = "black" }: { color: string }) => {
  return (
    <svg
      width="26"
      height="27"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 14.4583V22.4583C21 23.1656 20.719 23.8439 20.219 24.344C19.7189 24.844 19.0406 25.125 18.3333 25.125H3.66667C2.95942 25.125 2.28115 24.844 1.78105 24.344C1.28095 23.8439 1 23.1656 1 22.4583V7.79167C1 7.08442 1.28095 6.40615 1.78105 5.90605C2.28115 5.40595 2.95942 5.125 3.66667 5.125H11.6667"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 1.125H25V9.125"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3335 15.7917L25.0002 1.125"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ExternalLink;
