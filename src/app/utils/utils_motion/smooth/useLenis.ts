import { useEffect } from "react";
import { initLenis } from "./lenis";

export function useLenis() {
  useEffect(() => {
    initLenis();
  }, []);
}
