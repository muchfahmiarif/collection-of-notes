import React from "react";
import Link from "next/link";
import Image from "next/image";
import Warning from "@/public/images/seal-warning-fill.svg";

interface Cards3Props {
  data: {
    id: number;
    name: string;
    url: string;
    image: string;
    icon: any;
  }[];
}

const Cards3: React.FC<Cards3Props> = ({ data }) => {
  const [isHover, setIsHover] = React.useState<number | null>(null);

  const handleHover = (index: any) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {data.map((item) => (
          <Link href={item.url} key={item.id} target="_blank" className="">
            <div
              className="group border border-neutral-300 dark:border-white/10 px-20 h-14 rounded-lg flex flex-wrap hover:border-neutral-300 hover:shadow-md dark:hover:border-white/25 dark:hover:bg-neutral-900 hover:bg-neutral-100 relative overflow-hidden justify-center items-center content-center duration-300"
              onMouseOver={() => handleHover(item.id)}
              onMouseLeave={handleMouseLeave}>
              {isHover === item.id && (
                <Image
                  src={item.image}
                  alt={item.name}
                  className="shrink-0 min-h-full min-w-full items-center justify-center flex flex-wrap opacity-40"
                />
              )}

              <div className="absolute flex flex-wrap left-0 pl-4 gap-4">
                <p className={`text-2xl`}>{React.createElement(item.icon)}</p>
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cards3;
