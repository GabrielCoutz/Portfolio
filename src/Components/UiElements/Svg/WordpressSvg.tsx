import React from "react";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/variants";

const WordpressSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="83"
      height="83"
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.8979 25.6152H20.3144L32.8103 60.9383L39.8059 40.9473L34.3822 25.6152H29.5461V22.2494H50.9616V25.6152H45.9467L58.4424 60.9383L62.9342 48.1022C68.8265 31.6566 58.1048 26.5337 58.1048 22.8635C58.1048 19.1932 61.0802 16.2181 64.7502 16.2181C64.9488 16.2181 65.1416 16.2288 65.3305 16.2464C59.1119 10.376 50.7267 6.77606 41.5 6.77606C29.4438 6.77606 18.8241 12.9214 12.5986 22.2494H24.8975V25.6152H24.8979Z"
        fill="currentColor"
      />
      <path
        d="M6.77637 41.4999C6.77637 54.7941 14.2485 66.3413 25.2208 72.1763L9.55055 27.8801C7.76549 32.062 6.77637 36.6654 6.77637 41.4999Z"
        fill="currentColor"
      />
      <path
        d="M71.72 24.3891C72.2167 27.3136 72.0663 30.6006 71.3041 33.9004H71.4423L70.9172 35.4007C70.6061 36.484 70.2144 37.5922 69.7694 38.6811L57.8213 72.1539C68.7706 66.3118 76.2236 54.777 76.2236 41.4997C76.2236 35.2782 74.5858 29.4397 71.72 24.3891Z"
        fill="currentColor"
      />
      <path
        d="M30.791 74.538C34.1644 75.6308 37.7627 76.2235 41.5003 76.2235C45.0652 76.2235 48.5042 75.6854 51.7417 74.6874L41.5846 45.9756L30.791 74.538Z"
        fill="currentColor"
      />
      <path
        d="M70.8448 12.155C63.0065 4.31673 52.5849 0 41.4998 0C30.4148 0 19.9933 4.31673 12.155 12.155C4.31673 19.9933 0 30.4148 0 41.5C0 52.585 4.31673 63.0065 12.155 70.8448C19.9933 78.6831 30.415 82.9998 41.5 82.9998C52.585 82.9998 63.0065 78.6831 70.845 70.8448C78.6833 63.0065 83 52.5849 83 41.5C82.9998 30.4148 78.6831 19.9933 70.8448 12.155ZM41.4998 80.0723C20.231 80.0723 2.92751 62.7688 2.92751 41.5C2.92751 20.2311 20.231 2.92751 41.4998 2.92751C62.7687 2.92751 80.0721 20.2311 80.0721 41.5C80.0721 62.7688 62.7688 80.0723 41.4998 80.0723Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default WordpressSvg;