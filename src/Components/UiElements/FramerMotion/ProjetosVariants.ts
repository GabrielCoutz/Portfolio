import { Variants } from "framer-motion";

export const variantsProjetos: Variants = {
  default: {
    opacity: 0,
    scale: 0,
  },
  active: {
    opacity: 1,
    scale: 1,
    animation: "animacao 1s infinite alternate",
  },
  hover: {
    animation: "none",
    transition: {
      type: "spring",
      duration: 0.7,
      delayChildren: 0.1,
    },
    scale: 1.1,
  },
};

export const spanVariant: Variants = {
  default: {
    opacity: 0,
    transform: "translateY(200px)",
  },
  hover: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      delayChildren: 0.1,
    },
    transform: "translateY(0px)",
  },
};

export const listVariant: Variants = {
  default: {
    transform: "translateY(-200px)",
  },
  hover: {
    transform: "translateY(0px)",
  },
};

export const wrapperVariant: Variants = {
  active: {
    transitionDuration: "3s",
    color: "rgb(255, 255, 255)",
  },
};
