"use client";

import React from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {
  House,
  Contact,
  CircleFadingPlus,
  CircleUser,
  MessageCircleCode,
  BellDot,
  LogIn,
} from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Loading from "./Loading";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 lg:px-8 h-24 bg-slate-100 shadow-sm border-b">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-blue-700 text-2xl">
          LINKUP
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex w-full lg:w-[55%] text-sm items-center justify-between px-2">
        {/* NAV LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <House className="text-blue-600" />
            <p className="text-base">Homepage</p>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <Contact className="text-blue-600" />
            <p className="text-base">Friends</p>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1 hover:text-blue-600 transition"
          >
            <CircleFadingPlus className="text-blue-600" />
            <p className="text-base">Stories</p>
          </Link>
        </div>

        <SearchInput />
      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-6 justify-end">
        <ClerkLoading>
          <Loading />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:flex gap-3 items-center">
              <CircleUser className="text-blue-600 w-6 h-6" />
              <MessageCircleCode className="text-blue-600 w-6 h-6" />
              <BellDot className="text-blue-600 w-6 h-6" />
            </div>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <div className="flex gap-2 items-center text-lg">
              <LogIn className="text-blue-600" />
              <Link
                href="/sign-in"
                className="hover:underline hover:text-blue-600"
              >
                Login/Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
