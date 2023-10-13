import { type Framework, frameworks, assets } from "@/lib/frameworks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface FrameworkRotationProps {
  currentFramework: Framework;
}

export const FrameworkRotation: React.FC<FrameworkRotationProps> = ({ currentFramework }) => {
  return (
    <div className="w-[80px] h-[80px] align-middle -mt-2 mx-2 inline-flex relative">
      {frameworks.map((name, index) => (
        <Image
          key={index}
          src={assets[name]}
          alt="Framework Logo"
          width={80}
          height={80}
          className={cn(
            "w-full h-full object-center absolute top-0 object-contain left-0 transition-all duration-300",
            currentFramework === name
              ? "opacity-100 transform-none"
              : index > frameworks.indexOf(currentFramework as Framework)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
        />
      ))}
    </div>
  );
};
