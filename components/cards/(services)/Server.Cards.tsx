import React from "react";
import Cards from "@/components/Cards";
import { dataServer } from "@/data/(library)/(services)/server.services";

const ServerCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataServer.map((item) => (
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

export default ServerCards;
