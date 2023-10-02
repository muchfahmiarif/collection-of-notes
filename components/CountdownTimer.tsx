import React, { useEffect, useState } from "react";
import { type Framework } from "@/utils/frameworks";
import { CountdownTimerUtils } from "@/utils/countdown-timer";
import { cn } from "@/lib/utils";

type CountdownTimerProps = {
  currentFramework: Framework;
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ currentFramework }) => {
  const [countdown, setCountdown] = useState(CountdownTimerUtils());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(CountdownTimerUtils());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-3 text-center">
      <TimeUnit value={countdown.days} label="Days" currentFramework={currentFramework} />
      <TimeUnit value={countdown.hours} label="Hours" currentFramework={currentFramework} />
      <TimeUnit value={countdown.minutes} label="Minutes" currentFramework={currentFramework} />
      <TimeUnit value={countdown.seconds} label="Seconds" currentFramework={currentFramework} />
    </div>
  );
};

type TimeUnitProps = {
  value: number;
  label: string;
  currentFramework: Framework;
};

export const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, currentFramework }) => {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">{<NumberRotation number={value} />}</div>
      <div
        className={cn("text-xs font-medium", {
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
        {label}
      </div>
    </div>
  );
};

type NumberRotationProps = {
  number: number;
};

export const NumberRotation: React.FC<NumberRotationProps> = ({ number }) => {
  const numbers = Array.from({ length: 60 }, (_, i) => i);

  // Determine the class for each number based on the current number
  const getNumberClass = (index: number) => {
    if (index === number) return "opacity-100 transform-none";
    if (index > number) return "opacity-0 -translate-y-2";
    return "opacity-0 translate-y-2";
  };

  return (
    <div className="relative h-10 w-10">
      {numbers.map((num) => (
        <div key={num} className={cn("w-full h-full absolute transition-all duration-200", getNumberClass(num))}>
          {num}
        </div>
      ))}
    </div>
  );
};
