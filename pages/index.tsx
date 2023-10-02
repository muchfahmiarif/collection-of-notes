import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import Image from "next/image";
import { type Framework, frameworks } from "@/utils/frameworks";
import { cn } from "@/lib/utils";
import { poppins } from "./_app";
import FrameworkRotation from "@/components/FrameworkRotation";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { useRouter } from "next/router";
import Background from "@/components/(home-page)/(hero-section)/Background.Hero";

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

  const router = useRouter();

  return (
    <div>
      <Background />
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
            )}
            onClick={() => (window.location.href = "/docs")}>
            Test
          </Button>
          <CountdownTimer currentFramework={currentFramework} />
        </div>
      </div>
    </div>
  );
}
