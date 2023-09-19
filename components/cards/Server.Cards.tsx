import React from "react";
import Cards from "../Cards";
import { data } from "@/data/@library/serverService";

const ServerCards = () => {
  return (
    <div>
      <Cards data={data}></Cards>
    </div>
  );
};

export default ServerCards;
