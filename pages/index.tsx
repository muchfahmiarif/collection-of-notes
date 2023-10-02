import { useEffect, useState } from "react";
import { assets } from "@/utils/asset";
import Image from "next/image";
import { type Framework, frameworks } from "@/utils/frameworks";
import { cn } from "@/lib/utils";
import { poppins } from "./_app";
import FrameworkRotation from "@/components/FrameworkRotation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);
  const [showBackground, setShowBackground] = useState(false);
  const [ismounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(!ismounted);
  }, [ismounted]);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <div className={``}>
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
        src={assets.gradient}
        alt="gradient background"
        height={1200}
        width={1200}
        className="fixed h-screen w-screen inset-0 object-cover"
        role="presentation"
      />
      <div className="fixed inset-0 opacity-30" style={{ backgroundImage: `url(${assets.square})`, backgroundSize: "30px" }}></div>
      <div className={cn("bg-black fixed inset-0 transition-opacity duration-1000", !showBackground ? "opacity-100" : "opacity-0")}></div>

      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={`text-5xl max-w-3xl leading-snug mb-12 ${poppins.className} text-white font-bold`}>
            <Image alt="Figma Logo" className="inline-block mr-8 -mt-2" src={assets.figma} width={50} height={50} />
            to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
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
          <Button
            className={cn(
              "transition-color duration-200 text-black font-semibold border-2",
              {
                "border-purple-300": currentFramework === "qwik",
                "border-sky-300": currentFramework === "safari",
                "border-yellow-300": currentFramework === "chrome",
                "border-teal-300": currentFramework === "tailwind",
                "border-blue-300": currentFramework === "react",
                "border-green-300": currentFramework === "vue",
                "border-orange-400": currentFramework === "svelte",
                "border-red-300": currentFramework === "mobile",
                "border-neutral-300": currentFramework === "desktop",
              },
              {
                "bg-purple-300/20": currentFramework === "qwik",
                "bg-sky-300/20": currentFramework === "safari",
                "bg-yellow-300/20": currentFramework === "chrome",
                "bg-teal-300/20": currentFramework === "tailwind",
                "bg-blue-300/20": currentFramework === "react",
                "bg-green-300/20": currentFramework === "vue",
                "bg-orange-400/20": currentFramework === "svelte",
                "bg-red-300/20": currentFramework === "mobile",
                "bg-neutral-300/20": currentFramework === "desktop",
              },
              {
                "hover:bg-purple-300": currentFramework === "qwik",
                "hover:bg-sky-300": currentFramework === "safari",
                "hover:bg-yellow-300": currentFramework === "chrome",
                "hover:bg-teal-300": currentFramework === "tailwind",
                "hover:bg-blue-300": currentFramework === "react",
                "hover:bg-green-300": currentFramework === "vue",
                "hover:bg-orange-400": currentFramework === "svelte",
                "hover:bg-red-300": currentFramework === "mobile",
                "hover:bg-neutral-300": currentFramework === "desktop",
              }
            )}>
            Test
          </Button>
        </div>
      </div>
    </div>
  );
}
