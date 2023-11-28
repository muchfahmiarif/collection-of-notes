import React from "react";
import Cards from "@/components/Cards";
import { dataI18n } from "@/data/(library)/(services)/i18n";

const I18nCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataI18n.map((item) => (
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

export default I18nCards;
