import { useEffect } from "react";
import { useAnimationControls } from "motion/react";

export function useStagger(isVisible: boolean, staggerDelay = 0.1) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return controls;
}
