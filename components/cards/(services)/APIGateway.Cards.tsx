import React from "react";
import Cards from "@/components/Cards";
import { dataAPIGateway } from "@/data/(library)/(services)/apiGateway.services";

const ApiGatewayCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataAPIGateway.map((item) => (
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

export default ApiGatewayCards;
