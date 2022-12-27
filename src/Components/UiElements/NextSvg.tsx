import React from "react";
import { motion } from "framer-motion";
import { variants } from "./FramerMotion/variants";

const NextSvg = ({ fill }: { fill: string }) => {
  return (
    <motion.svg
      variants={variants(fill)}
      initial="default"
      whileTap="tap"
      whileHover="hover"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.6751 0.0268854C46.4603 0.0464147 45.7768 0.114767 45.1616 0.163591C30.9735 1.44276 17.6838 9.09827 9.26667 20.8647C4.57963 27.407 1.58188 34.8282 0.449175 42.6887C0.0488234 45.4326 0 46.2431 0 49.9634C0 53.6838 0.0488234 54.4942 0.449175 57.2381C3.16375 75.996 16.5121 91.7562 34.6158 97.5955C37.8576 98.6403 41.2753 99.3531 45.1616 99.7828C46.6751 99.9488 53.2175 99.9488 54.731 99.7828C61.4393 99.0407 67.1223 97.3807 72.7273 94.5196C73.5866 94.0802 73.7526 93.963 73.6354 93.8654C73.5573 93.8068 69.8955 88.8952 65.5014 82.9582L57.5139 72.1683L47.5051 57.3553C41.9979 49.2115 37.467 42.552 37.428 42.552C37.3889 42.5423 37.3499 49.1237 37.3303 57.16C37.301 71.2309 37.2913 71.7972 37.1155 72.1292C36.8616 72.6077 36.6663 72.803 36.2562 73.0178C35.9438 73.174 35.6703 73.2033 34.1959 73.2033H32.5066L32.0574 72.9202C31.7645 72.7346 31.5497 72.4905 31.4032 72.2073L31.1981 71.7679L31.2177 52.1898L31.2469 32.6018L31.5497 32.221C31.7059 32.0159 32.0379 31.7523 32.2722 31.6254C32.6726 31.4301 32.8288 31.4105 34.5181 31.4105C36.5101 31.4105 36.8421 31.4887 37.3596 32.055C37.5061 32.2112 42.9255 40.3745 49.4092 50.2075C55.893 60.0406 64.7593 73.467 69.1143 80.0581L77.0237 92.0394L77.4241 91.7757C80.9687 89.4713 84.7183 86.1903 87.6867 82.7727C94.0045 75.5176 98.0764 66.6708 99.4434 57.2381C99.8438 54.4942 99.8926 53.6838 99.8926 49.9634C99.8926 46.2431 99.8438 45.4326 99.4434 42.6887C96.7288 23.9308 83.3805 8.17062 65.2768 2.33135C62.0838 1.29629 58.6857 0.583472 54.8775 0.153826C53.94 0.0561794 47.4856 -0.051232 46.6751 0.0268854V0.0268854ZM67.1224 30.2388C67.5911 30.4731 67.9719 30.9223 68.1086 31.391C68.1867 31.6449 68.2062 37.074 68.1867 49.3092L68.1574 66.8661L65.062 62.1204L61.9568 57.3748V44.6124C61.9568 36.3612 61.9959 31.723 62.0545 31.4984C62.2107 30.9516 62.5525 30.522 63.0212 30.2681C63.4215 30.063 63.568 30.0435 65.1011 30.0435C66.5462 30.0435 66.8001 30.063 67.1224 30.2388V30.2388Z"
        fill="currentColor"
      />
      <path
        d="M76.5356 92.2542C76.1938 92.469 76.0864 92.6155 76.3891 92.4495C76.6039 92.3225 76.9555 92.0589 76.8969 92.0491C76.8676 92.0491 76.7016 92.1468 76.5356 92.2542ZM75.8618 92.6936C75.6861 92.8303 75.6861 92.8401 75.9009 92.7327C76.018 92.6741 76.1157 92.6057 76.1157 92.5862C76.1157 92.5081 76.0669 92.5276 75.8618 92.6936ZM75.3736 92.9865C75.1978 93.1232 75.1978 93.133 75.4126 93.0256C75.5298 92.967 75.6275 92.8987 75.6275 92.8791C75.6275 92.801 75.5786 92.8205 75.3736 92.9865ZM74.8854 93.2795C74.7096 93.4162 74.7096 93.426 74.9244 93.3185C75.0416 93.26 75.1392 93.1916 75.1392 93.1721C75.1392 93.094 75.0904 93.1135 74.8854 93.2795ZM74.1432 93.6701C73.7722 93.8654 73.7917 93.9435 74.1628 93.758C74.3288 93.6701 74.4557 93.5822 74.4557 93.5627C74.4557 93.4943 74.4459 93.5041 74.1432 93.6701Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default NextSvg;
