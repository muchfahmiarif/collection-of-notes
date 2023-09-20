import React from "react";
import Cards from "../Cards";
import { dataServer } from "@/data/@library/server.services";

const ServerCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataServer.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default ServerCards;
