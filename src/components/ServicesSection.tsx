"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import StickyCardStack from "./StickyCardStack";
import { projects } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "cfd",
    title: "Suomi",
    description: "Alkuperäiskieli",
  },
  {
    id: "futures",
    title: "Kaunokirjallisuus (romaani)",
    description: "Tyyppi",
  },
  {
    id: "crypto",
    title: "Otava, 2023",
    description: "Kustantaja ja ilmestymisvuosi",
  },
];

const text =
  "Kalevi, 12-vuotias poika, viettää kesää mökillä isoisänsä kanssa. Yhdessä uuden ystävänsä Ellin kanssa he löytävät salaperäisen kartanon, jossa piilee vanhoja arvoituksia. Heidän täytyy ratkaista ne ennen kuin kesä loppuu – mutta metsän varjot vahtivat heidän jälkiensä.";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("cfd");
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const container = useRef<HTMLDivElement | null>(null);
  const body = useRef<HTMLDivElement | null>(null);
  const thankYouRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // New refs for cards

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
    createThankYouAnimation();
    setupCardAnimations(); // Setup card hover animations
  }, []);

  // Setup card hover animations
  const setupCardAnimations = () => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      // Create a border element for animation
      const borderElement = document.createElement("div");
      borderElement.className =
        "absolute inset-0 border-2 border-blue-500/0 rounded-lg pointer-events-none";
      card.appendChild(borderElement);

      // Store original background for reset
      const originalBg = window.getComputedStyle(card).background;

      // Setup mouse enter animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10, // Move up slightly
          duration: 0.3,
          ease: "power2.out",
        });

        // Lighten background
        gsap.to(card, {
          backgroundColor: "rgba(59, 130, 246, 0.1)", // Light blue background
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)", // Add glow
          duration: 0.3,
        });

        // Animate border
        gsap.to(borderElement, {
          borderColor: "rgba(59, 130, 246, 0.5)", // Show blue border
          duration: 0.3,
        });
      });

      // Setup mouse leave animation
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0, // Return to original position
          duration: 0.3,
          ease: "power2.out",
        });

        // Reset background
        gsap.to(card, {
          background: originalBg,
          boxShadow: "none",
          duration: 0.3,
        });

        // Reset border
        gsap.to(borderElement, {
          borderColor: "rgba(59, 130, 246, 0)", // Hide border
          duration: 0.3,
        });
      });
    });
  };

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: (container.current?.offsetTop || 0) - window.innerHeight / 2,
        end: (container.current?.offsetTop || 0) - window.innerHeight / 3,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  // Animation function for the thank you text
  const createThankYouAnimation = () => {
    if (!thankYouRef.current) return;

    // Initial state - hidden and scaled down
    gsap.set(thankYouRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 50,
    });

    // Create the bounce/jump animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: thankYouRef.current,
          start: "top bottom-=100",
          end: "center center",
          toggleActions: "play none none none",
        },
      })
      .to(thankYouRef.current, {
        opacity: 1,
        scale: 1.2, // Overshoot to create bounce effect
        y: -20,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .to(thankYouRef.current, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.3)",
      });

    // Add a subtle continuous floating animation after the initial bounce
    gsap.to(thankYouRef.current, {
      y: "+=10",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1, // Start after the initial animation
    });
  };

  const splitWords = (text: string) => {
    const body: JSX.Element[] = [];
    text.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<span key={word + "_" + i}>{letters}</span>);
      // Add a space character after each word (except the last one)
      if (i < text.split(" ").length - 1) {
        body.push(
          <span
            key={"space_" + i}
            ref={(el) => {
              if (el) refs.current.push(el);
            }}
            className="opacity-20 py-6"
          >
            &nbsp;
          </span>
        );
      }
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20 py-6"
          key={letter + "_" + i}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  // Reset card refs array when re-rendering
  useEffect(() => {
    cardRefs.current = [];
  }, []);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text blue-glow">
                Kirjan purustiedot
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`card-gradient backdrop-blur-sm px-6 py-12 transition-all duration-300 border-transparent cursor-pointer relative`}
                onClick={() => setActiveService(service.id)}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-bold mb-10">{service.title}</h3>
                  <p className="text-zinc-200 text-lg flex-grow mb-4">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div
        ref={container}
        className="flex items-end justify-center text-zinc-200 mx-auto py-10 "
      >
        <div ref={body} className="flex flex-wrap text-5xl font-bold max-w-6xl">
          {splitWords(text)}
        </div>
      </div>
      <div className="pt-20 mt-10 mb-[70vh]">
        {projects.map((item, index) => (
          <StickyCardStack key={index} index={index} {...item} />
        ))}
      </div>
      <div
        ref={thankYouRef}
        className="h-[100vh] py-100 text-center text-8xl font-bold flex items-center justify-center"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Kiitos kuuntelemisesta ja katsomisesta!
        </span>
      </div>
    </>
  );
}
