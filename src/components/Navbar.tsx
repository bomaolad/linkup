import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { House, Contact, CircleFadingPlus } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      {/* LEFT  */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-blue-700 text-2xl">
          DiMEJiSOCiAL
        </Link>
      </div>

      {/* CENTER  */}
      <div className="hidden md:flex w-[50%]">
        {/* LINKS  */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-1">
            <House color="blue" />
            <p className="text-lg">Homepage</p>
          </Link>

          <Link href="/" className="flex gap-1">
            <Contact color="blue" />
            <p className="text-lg">Friends</p>
          </Link>

          <Link href="/" className="flex gap-1">
            <CircleFadingPlus color="blue" />
            <p className="text-lg">Stories</p>
          </Link>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
