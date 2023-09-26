import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cardProps } from "@/types/card.type";

const Cards: React.FC<cardProps> = ({ id, url, darkImage, lightImage, name, icon, tags }) => {
  const [isHover, setIsHover] = React.useState<number | null>(null);

  const theme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;

  const handleHover = (index: any) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <Link href={url} key={id} target="_blank" className="">
      <div
        className={`group border border-neutral-300 dark:border-white/10 px-20  rounded-lg flex flex-wrap hover:border-neutral-300 hover:shadow-md dark:hover:border-white/25 dark:hover:bg-neutral-900 hover:bg-neutral-100 relative overflow-hidden justify-center items-center content-center duration-300 h-16 transition`}
        onMouseOver={() => handleHover(id)}
        onMouseLeave={handleMouseLeave}>
        {isHover === id && (
          <Image
            src={theme === "light" ? lightImage : darkImage}
            alt={name}
            className="shrink-0 min-h-full min-w-full items-center justify-center flex flex-wrap opacity-20"
          />
        )}
        <div className="absolute flex flex-wrap left-0 pl-4 w-full h-full content-center items-center">
          <div className={`flex w-full items-center gap-x-3`}>
            <span className={`text-2xl ${tags.length - 1 ? `` : `group-hover:text-lg`}`}>{React.createElement(icon)}</span>
            {name}
          </div>
          {isHover === id && (
            <div className="flex">
              <p className={cn(`text-neutral-700 dark:text-neutral-200 text-xs font-sans pt-2`)}>
                {tags.length === 0
                  ? ""
                  : tags.map((tag, index) => (
                      <span key={index} className="bg-blue-400/60 dark:bg-blue-400/30 px-1 pb-[2px] rounded-md mr-1">
                        {tag}
                        {index !== tags.length - 1 && <span className=""></span>}
                      </span>
                    ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Cards;
