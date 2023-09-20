import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  item: {
    id: number;
    url: string;
    image: string;
    name: string;
    icon: string;
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
        className="group border border-neutral-300 dark:border-white/10 px-20 h-14 rounded-lg flex flex-wrap hover:border-neutral-300 hover:shadow-md dark:hover:border-white/25 dark:hover:bg-neutral-900 hover:bg-neutral-100 relative overflow-hidden justify-center items-center content-center duration-300"
        onMouseOver={() => handleHover(item.id)}
        onMouseLeave={handleMouseLeave}>
        {isHover === item.id && (
          <Image src={item.image} alt={item.name} className="shrink-0 min-h-full min-w-full items-center justify-center flex flex-wrap opacity-40" />
        )}
        <div className="absolute flex flex-wrap left-0 pl-4 gap-4 w-full h-full">
          <div className="flex">
            <p className={`text-2xl`}>{React.createElement(item.icon)}</p>
            {item.name}
          </div>
          <div className="flex">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
