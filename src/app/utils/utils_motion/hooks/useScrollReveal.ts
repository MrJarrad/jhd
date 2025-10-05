import { useEffect } from "react";
import { useInView } from "motion/react";

export function useScrollReveal(ref: React.RefObject<HTMLElement>, onReveal: () => void) {
  const isInView = useInView(ref, { margin: "-20% 0px", once: true });

  useEffect(() => {
    if (isInView) onReveal();
  }, [isInView, onReveal]);
}
