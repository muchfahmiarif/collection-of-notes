import React from "react";
import { dataDatabase } from "@/data/@library/database.services";
import Cards from "../Cards";

const DatabaseCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataDatabase.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default DatabaseCards;
