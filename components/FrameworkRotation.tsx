import { assets } from "@/utils/asset";
import { frameworks, type Framework } from "@/utils/frameworks";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type FrameworkRotationProps = {
  currentFramework: Framework;
};

const FrameworkRotation: React.FC<FrameworkRotationProps> = ({ currentFramework }) => {
  return (
    <div className="w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative">
      {frameworks.map((name, index) => (
        <Image
          key={index}
          src={assets[name]}
          alt="Framework Logo"
          width={80}
          height={80}
          className={cn(
            "w-full h-full object-contain absolute object-center top-0 left-0 transition-all duration-300",
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

export default FrameworkRotation;
