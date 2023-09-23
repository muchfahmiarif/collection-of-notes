import { dataSMTP } from "@/data/@library/smtp.services";
import React from "react";
import Cards from "@/components/Cards";

const SMTPCards = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataSMTP.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SMTPCards;
