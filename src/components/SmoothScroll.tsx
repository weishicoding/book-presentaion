// components/SmoothScroll.tsx
"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface SmoothScrollProps {
  children: ReactNode;
}

// Extending the LenisOptions type to include potential missing properties
interface ExtendedLenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  smooth?: boolean;
  smoothTouch?: boolean;
  touchMultiplier?: number;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal";
  infinite?: boolean;
  orientation?: "vertical" | "horizontal";
  wheelMultiplier?: number;
  smoothWheel?: boolean;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with the correct options
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Reduce wheel multiplier to make mouse wheel scrolling slower
      wheelMultiplier: 0.5,

      // Other standard options
      smooth: true,
      orientation: "vertical",
      smoothWheel: true,
    } as ExtendedLenisOptions);

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
    };
  }, []);

  return <>{children}</>;
}
