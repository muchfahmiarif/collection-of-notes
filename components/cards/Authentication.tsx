import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { Data } from "@/public/data/authentication";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CardAuth = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {Data.map((item) => (
          <Link href={item.url} key={item.id}>
            <Card className={cn(`bg-[#111] hover:bg-neutral-900 border-white/10 hover:border-white/25`)}>
              <CardContent>{item.name}</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardAuth;
