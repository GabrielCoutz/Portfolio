import React from "react";
import { motion } from "framer-motion";
import { variants } from "./FramerMotion/variants";

const JavascriptSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="100"
      height="115"
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.37339 102.334L0 0L100 0.205645L91.146 102.334L50.3774 114.139L8.37339 102.334Z"
        fill="currentColor"
      />
      <path
        d="M50.3774 104.256V9.74597L91.5581 9.88307L84.2145 94.4403L50.3774 104.256Z"
        fill="currentColor"
      />
      <path
        d="M45.9677 20.9678H35.0806V83.871L26.6129 82.2581V73.7904L16.5322 72.1775V91.1291L45.9677 98.7904V20.9678ZM54.1346 20.9678H84.2742L82.258 33.0242H65.6403V52.8089H82.258L80.2419 92.742L54.1346 98.7904V86.2904L71.7742 80.242L72.7927 63.7097L54.1346 66.4113V20.9678Z"
        fill="white"
      />
    </motion.svg>
  );
};

export default JavascriptSvg;
