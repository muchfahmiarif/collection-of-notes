import React from "react";
import { dataAuthentication } from "@/data/@library/authentication.services";
import Cards from "../Cards";
import { dataAPIGateway } from "@/data/@library/apiGateway.services";

const AuthenticationCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataAPIGateway.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default AuthenticationCards;
