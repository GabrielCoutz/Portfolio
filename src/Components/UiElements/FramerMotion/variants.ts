import { Variants } from "framer-motion";

export const variants = (fill: string): Variants => ({
  default: {
    color: fill,
  },
  hover: {
    color: "currentColor",
    transition: {
      duration: 2,
    },
  },
  tap: {
    scale: 0.9,
  },
});
