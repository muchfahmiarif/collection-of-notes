import { data } from "@/data/@library/monitoring.service";
import React from "react";
import Cards2 from "../Cards2";

const MonitoringCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {data.map((item) => (
          <Cards2 item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default MonitoringCards;
