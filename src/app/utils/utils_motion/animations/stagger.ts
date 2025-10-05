import { Variants } from "motion/react";

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  visible: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});
