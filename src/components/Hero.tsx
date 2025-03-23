"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Image1 from "@/public/image1.jpeg";
import Image2 from "@/public/image2.png";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-28 pb-20 grid-bg mb-20">
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#0d0c0e] via-transparent to-[#0d0c0e] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`mb-2 inline-block transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="px-4 py-1 rounded-full text-xs md:text-sm font-medium bg-cyan-400/30 text-blue-400 border border-cyan-700/30">
              Will {``} <span className="pl-5">20.03.2025</span>
            </span>
          </div>

          <h1
            className={`tracking-tighter mb-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="block text-white text-6xl font-bold mt-4">
              Kalevin Kesätarina
            </span>
            <span className="block gradient-text text-4xl font-bold purple-glow mt-4">
              Mimmu Tihinen
            </span>
            <span className="block text-white text-4xl font-bold mt-4">
              Kuvittanut Meeri Hentilä
            </span>
          </h1>

          <p
            className={`text-zinc-400 max-w-2xl mt-4 mx-auto mb-8 text-base md:text-lg transition-all duration-1000 delay-200 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Sympaattinen selkokirja vie kesänmittaiselle seikkailulle. Mimmu
            Tihisen mainion tarinan on kuvittanut Meeri Hentilä.
          </p>
        </div>
      </div>

      {/* Floating images */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div
          className={`absolute top-[10%]  left-[15%] transition-all duration-1000 delay-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Image
            src={Image1}
            alt="Laptop"
            width={250}
            height={200}
            className="w-52 h-auto -rotate-45 rounded-2xl"
          />
        </div>
        <div
          className={`absolute  -bottom-20 right-[15%] transition-all duration-1000 delay-900 transform ${
            isVisible ? "translate-y-0 opacity-70" : "translate-y-10 opacity-0"
          }`}
        >
          <Image
            src={Image2}
            alt="Encryption"
            width={250}
            height={250}
            className="w-100 h-auto rotate-12 rounded-2xl z-100"
          />
        </div>
      </div>

      {/* Purple glow effects */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-700/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-700/20 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
}
