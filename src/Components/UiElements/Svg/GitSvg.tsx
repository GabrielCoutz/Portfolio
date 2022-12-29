import React from "react";
import { motion } from "framer-motion";
import { variants } from "../FramerMotion/variants";

const GitSvg = ({ fill }: { fill: string }) => {
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
        d="M98.1139 45.5453L54.452 1.88611C51.9393 -0.628703 47.8612 -0.628703 45.3454 1.88611L36.2794 10.953L47.7798 22.454C50.4531 21.5512 53.5177 22.1567 55.6478 24.2874C57.7892 26.4309 58.3903 29.5216 57.4651 32.2041L68.5491 43.2881C71.2312 42.3641 74.3251 42.9614 76.4664 45.1066C79.4603 48.0992 79.4603 52.9488 76.4664 55.9425C73.4721 58.9374 68.6225 58.9374 65.6272 55.9425C63.376 53.6897 62.8193 50.3826 63.9594 47.609L53.6221 37.2712L53.621 64.4743C54.3513 64.8354 55.0397 65.3177 55.6478 65.9235C58.641 68.9158 58.641 73.7648 55.6478 76.7618C52.654 79.7545 47.8023 79.7545 44.8117 76.7618C41.8185 73.7648 41.8185 68.9158 44.8117 65.9235C45.5517 65.1848 46.4072 64.626 47.3207 64.2515V36.7959C46.4072 36.4225 45.5527 35.8676 44.8117 35.1239C42.5444 32.8582 41.9986 29.5307 43.1611 26.7464L31.8241 15.4073L1.88652 45.3433C-0.62884 47.8602 -0.62884 51.9383 1.88652 54.4532L45.5484 98.1124C48.0621 100.627 52.1392 100.627 54.6561 98.1124L98.1139 54.6557C100.629 52.1398 100.629 48.0601 98.1139 45.5453Z"
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default GitSvg;