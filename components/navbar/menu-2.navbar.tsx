"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  className?: string;
}

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/docs",
    name: "Docs",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  let pathname = usePathname() || "/";
  const [hoverPath, setHoverPath] = useState(pathname);

  if (pathname.includes("/wiriting/")) {
    pathname = "/writing";
  }

  return (
    <div className={`border border-stone-800/90 p-[0.4rem] rounded-lg sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md ${className}`}>
      <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              href={item.path}
              onMouseOver={() => setHoverPath(item.path)}
              onMouseLeave={() => setHoverPath(pathname)}>
              <span>{item.name}</span>
              {item.path === hoverPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
