import { dataMonitoring } from "@/data/@library/monitoring.service";
import React from "react";
import Cards from "../Cards";

const MonitoringCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataMonitoring.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default MonitoringCards;
