import React from "react";
import { dataAuthentication } from "@/data/@library/authentication.services";
import Cards from "../Cards";

const AuthenticationCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataAuthentication.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default AuthenticationCards;
