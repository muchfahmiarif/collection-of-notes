import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardsProps {
  item: {
    id: number;
    url: string;
    image: string;
    name: string;
    icon: string;
    tags: string[];
  };
}

const Cards: React.FC<CardsProps> = ({ item }) => {
  const [isHover, setIsHover] = React.useState<number | null>(null);

  const handleHover = (index: any) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <Link href={item.url} key={item.id} target="_blank" className="">
      <div
        className="group border border-neutral-300 dark:border-white/10 px-20 h-[4.5rem] rounded-lg flex flex-wrap hover:border-neutral-300 hover:shadow-md dark:hover:border-white/25 dark:hover:bg-neutral-900 hover:bg-neutral-100 relative overflow-hidden justify-center items-center content-center duration-300"
        onMouseOver={() => handleHover(item.id)}
        onMouseLeave={handleMouseLeave}>
        {isHover === item.id && (
          <Image src={item.image} alt={item.name} className="shrink-0 min-h-full min-w-full items-center justify-center flex flex-wrap opacity-40" />
        )}
        <div className="absolute flex flex-wrap left-0 pl-4 w-full h-full content-center items-center">
          <div className={`flex w-full items-center gap-x-3 ${item.tags.length - 1 ? `` : `group-hover:text-sm`}`}>
            <span className={`text-2xl ${item.tags.length - 1 ? `` : `group-hover:text-lg`}`}>{React.createElement(item.icon)}</span>
            {item.name}
          </div>
          {isHover === item.id && (
            <div className="flex pt-2 ">
              <p className={cn(`text-neutral-700 dark:text-neutral-200 text-xs font-sans pt-1`)}>
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-neutral-400/60 dark:bg-neutral-400/30 px-1 py-[2px] rounded-md mr-1">
                    {tag}
                    {index !== item.tags.length - 1 && <span className=""></span>}
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
