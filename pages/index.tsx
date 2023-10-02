import { useEffect, useState } from "react";
import { assets } from "@/utils/asset";
import Image from "next/image";
import { type Framework, frameworks } from "@/utils/frameworks";
import { cn } from "@/lib/utils";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0]);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);

    return () => clearInterval(intervalId);
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
    </div>
  );
}
