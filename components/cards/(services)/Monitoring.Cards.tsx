import { dataMonitoring } from "@/data/(library)/(services)/monitoring.services";
import React from "react";
import Cards from "@/components/Cards";

const MonitoringCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataMonitoring.map((item) => (
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

export default MonitoringCards;
