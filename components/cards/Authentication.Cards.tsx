import React from "react";
import { Data } from "@/data/@library/authentication.services";
import Link from "next/link";
import Image from "next/image";

const AuthenticationCards = () => {
  const [isHover, setIsHover] = React.useState(null);

  const handleHover = (index: any) => {
    setIsHover(index);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {Data?.map((item) => (
          <Link href={item.url} key={item.id} target="_blank" className="">
            <div
              className="group border border-white/10 px-20 h-14 rounded-lg flex flex-wrap hover:border-white/25 dark:hover:bg-neutral-900 hover:bg-neutral-100 relative overflow-hidden justify-center items-center content-center duration-300"
              onMouseOver={() => handleHover(item.id)}
              onMouseLeave={handleMouseLeave}>
              {isHover === item.id && (
                <Image
                  src={item.image}
                  alt={item.name}
                  className="shrink-0 min-h-full min-w-full items-center justify-center flex flex-wrap opacity-50"
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

export default AuthenticationCards;
