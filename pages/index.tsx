import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={`min-h-screen w-full flex justify-center bg-slate-500`}>
      <div className="bg-slate-800 w-full mx-6 md:mx-40 justify-center flex">
        <div>
          <h1 className="text-black">Hello World</h1>
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
}
