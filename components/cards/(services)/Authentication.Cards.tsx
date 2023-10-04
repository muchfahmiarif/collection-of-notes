import React from "react";
import { dataAuthentication } from "@/data/(library)/(services)/authentication.services";
import Cards from "@/components/Cards";

const AuthenticationCards = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-4">
        {dataAuthentication.map((item) => (
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

export default AuthenticationCards;
