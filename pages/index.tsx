import Hero from "@/components/Home";
import TrialHome from "@/components/Trial-home";
import Navbar from "@/components/navbar/menu-2.navbar";
import { NavigationMenuDemo } from "@/components/navbar/menu.navbar";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <NavigationMenuDemo />
      {/* <Hero /> */}
      <TrialHome />
    </div>
  );
}
