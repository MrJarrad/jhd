import { gsap } from "./gsap";

export function parallax(el: HTMLElement, speed = 0.5) {
  gsap.to(el, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      scrub: true
    }
  });
}
