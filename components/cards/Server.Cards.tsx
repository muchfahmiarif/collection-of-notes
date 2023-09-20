import React from "react";
import Cards3 from "../Cards3";
import { data } from "@/data/@library/serverService";

const ServerCards = () => {
  return (
    <div>
      <Cards3 data={data}></Cards3>
    </div>
  );
};

export default ServerCards;
