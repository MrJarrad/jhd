import { Variants } from "motion/react";

export const slide = (direction: "up" | "down" | "left" | "right"): Variants => {
  const offset = {
    up: { y: -40 },
    down: { y: 40 },
    left: { x: -40 },
    right: { x: 40 }
  }[direction];

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, ...offset, transition: { duration: 0.3 } }
  };
};
