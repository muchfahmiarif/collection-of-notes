import React from "react";
import Cards from "@/components/Cards";
import { dataToast } from "@/data/(library)/(ui)/toast.ui";

const DatabaseCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataToast.map((item) => (
          <Cards
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            icon={item.icon}
            darkImage={item.darkImage}
            lightImage={item.lightImage}
            tags={item.tags}
          />
        ))}
      </div>
    </>
  );
};

export default DatabaseCards;
