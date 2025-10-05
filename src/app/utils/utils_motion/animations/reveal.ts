import { Variants } from "motion/react";

export const reveal: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};
