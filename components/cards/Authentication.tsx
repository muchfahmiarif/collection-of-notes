import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const CardAuth = () => {
  const Data = [
    {
      id: 1,
      name: "Auth0",
      url: "https://auth0.com/",
    },
    {
      id: 2,
      name: "Firebase",
      url: "https://firebase.google.com/",
    },
    {
      id: 3,
      name: "Next Auth",
      url: "https://next-auth.js.org/",
    },
    {
      id: 4,
      name: "Supabase",
      url: "https://supabase.io/",
    },
    {
      id: 5,
      name: "AWS Amplify",
      url: "https://aws.amazon.com/amplify/",
    },
    {
      id: 6,
      name: "Clerk",
      url: "https://clerk.dev/",
    },
    {
      id: 7,
      name: "Permit",
      url: "https://www.permit.io/",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {Data.map((item) => (
          <Card key={item.id} className="bg-[#111]">
            <CardContent>
              <a href={item.url}>{item.name}</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardAuth;
