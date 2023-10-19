import { type Framework, frameworks, assets } from "@/lib/frameworks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { setInterval } from "timers";
import { FrameworkRotation } from "./FrameworkRotation";

const Hero = () => {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    let index = 0;
    const rotateFramework = () => {
      setCurrentFramework(frameworks[index]);
      index = (index + 1) % frameworks.length;
    };
    const interval = setInterval(rotateFramework, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBackground(true);
  }, []);

  return (
    <div className="text-white">
      <div
        className={cn("fixed inset-0 transition-colors delay-100 duration-700 opacity-25", {
          "bg-purple-300": currentFramework === "qwik",
          "bg-sky-300": currentFramework === "safari",
          "bg-yellow-300": currentFramework === "chrome",
          "bg-teal-300": currentFramework === "tailwind",
          "bg-blue-300": currentFramework === "react",
          "bg-green-300": currentFramework === "vue",
          "bg-orange-400": currentFramework === "svelte",
          "bg-red-300": currentFramework === "mobile",
          "bg-neutral-300": currentFramework === "desktop",
        })}></div>
      <Image
        alt="Gradient Background"
        height={1200}
        width={1200}
        role="presentation"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      <div className="fixed inset-0 opacity-30" style={{ backgroundImage: `url(${assets.square})`, backgroundSize: "30px" }}></div>
      <div className={cn("bg-black fixed inset-0 transition-opacity duration-1000", !background ? "opacity-100" : "opacity-0")}></div>

      <div className="max-w-5xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={`text-7xl max-w-3xl text-center leading-snug mb-12`}>
            <Image alt="Figma Logo " className="inline-block mr-8 -mt-2" src={assets.figma} width={50} height={50} /> to{" "}
            <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-purple-300": currentFramework === "qwik",
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
              })}>
              never
            </span>{" "}
            be the same again
          </h1>
          <div className="mb-8">
            <button
              className={cn("text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200", {
                "bg-purple-300": currentFramework === "qwik",
                "bg-sky-300": currentFramework === "safari",
                "bg-yellow-300": currentFramework === "chrome",
                "bg-teal-300": currentFramework === "tailwind",
                "bg-blue-300": currentFramework === "react",
                "bg-green-300": currentFramework === "vue",
                "bg-orange-400": currentFramework === "svelte",
                "bg-red-300": currentFramework === "mobile",
                "bg-neutral-300": currentFramework === "desktop",
              })}>
              Claim Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
