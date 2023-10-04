import React from "react";
import { dataDatabase } from "@/data/(library)/(services)/database.services";
import Cards from "@/components/Cards";

const DatabaseCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataDatabase.map((item) => (
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

export default DatabaseCards;
