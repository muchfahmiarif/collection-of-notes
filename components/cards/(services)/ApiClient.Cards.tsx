import React from "react";
import Cards from "@/components/Cards";
import { dataApiClient } from "@/data/(library)/(services)/apiClient.services";

const ApiClientCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataApiClient.map((item) => (
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

export default ApiClientCards;
