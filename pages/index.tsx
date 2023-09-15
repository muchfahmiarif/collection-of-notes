import Navbar from "@/components/navbar/menu-2.navbar";
import { NavigationMenuDemo } from "@/components/navbar/menu.navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={`min-h-screen w-full flex justify-center bg-slate-500`}>
      <div className="bg-slate-800 w-full mx-6 md:mx-40 justify-center flex">
        <div>
          <h1 className="text-black">Hello World</h1>
          <Button
            onClick={() => {
              location.href = "/docs";
            }}>
            Click me
          </Button>
          {/* <Navbar />
          <NavigationMenuDemo /> */}
          <div className="min-h-screen"></div>
        </div>
      </div>
    </div>
  );
}
