// components/StickyCardStack.jsx
"use client";

import Image, { StaticImageData } from "next/image";

interface StickyCardProps {
  sequence: string;
  title: string;
  image: StaticImageData;
  description: string;
  color: string;
  index: number;
}

export default function StickyCardStack({
  sequence,
  title,
  image,
  description,
  index,
  color,
}: StickyCardProps) {
  return (
    <div className="h-[400px] flex items-center justify-center sticky top-20 px-8">
      <div
        className="w-full h-[400px] relative rounded-2xl shadow-sm p-8 flex justify-between text-neutral-950"
        style={{
          backgroundColor: color,
          top: `calc(-10% + ${index * 80}px)`,
        }}
      >
        <div className="w-[20%]">{sequence}</div>
        <div className="flex-1 px-4">
          <h1 className="text-4xl font-bold ">{title}</h1>
          <div className="text-2xl font-semibold mt-8">
            <p>{description}</p>
          </div>
        </div>
        <div className="relative w-[30%]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="400px"
          />
        </div>
      </div>
    </div>
  );
}
