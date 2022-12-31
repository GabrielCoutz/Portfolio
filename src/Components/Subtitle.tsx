import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export const subtitleVariant: Variants = {
  default: {
    background:
      "linear-gradient(270.4deg, rgb(14 14 14) -27.9%, rgb(14 14 14) 118.28%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  active: {
    transition: {
      delay: 1,
      duration: 1,
    },
    background:
      "linear-gradient(270.4deg, rgb(39 27 181) -27.9%, rgb(79 67 209) 118.28%)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
};

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      className="subTitle"
      variants={subtitleVariant}
      initial="default"
      whileInView="active"
    >
      {children}
    </motion.span>
  );
};

export default Subtitle;
