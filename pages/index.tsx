import Navbar from "@/components/navbar/menu-2.navbar";
import { NavigationMenuDemo } from "@/components/navbar/menu.navbar";
import { Button } from "@/components/ui/button";
import { assets } from "@/utils/asset";
import Image from "next/image";

export default function Home() {
  return (
    <div className={``}>
      <Image
        src={assets.gradient}
        alt="gradient background"
        height={1200}
        width={1200}
        className="fixed h-screen w-screen inset-0 object-cover"
        role="presentation"
      />
      <div className="fixed inset-0 opacity-30" style={{ backgroundImage: `url(${assets.square})`, backgroundSize: "30px" }}></div>
    </div>
  );
}
