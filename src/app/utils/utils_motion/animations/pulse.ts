import { Variants } from "motion/react";

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
  }
};
