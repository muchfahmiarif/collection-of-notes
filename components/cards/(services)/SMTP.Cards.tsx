import { dataSMTP } from "@/data/(library)/(services)/smtp.services";
import React from "react";
import Cards from "@/components/Cards";

const SMTPCards = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataSMTP.map((item) => (
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
    </div>
  );
};

export default SMTPCards;
