import Cards from "@/components/Cards";
import { dataCarousel } from "@/data/(library)/(ui)/carousel";
import React from "react";

const AnimationCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataCarousel.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            icon={item.icon}
            darkImage={item.darkImage}
            lightImage={item.lightImage}
            suggested={item.suggested}
            tags={item.tags}
          />
        ))}
      </div>
    </>
  );
};

export default AnimationCards;
