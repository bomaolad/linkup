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
    <nav className="flex items-center justify-between px-4 lg:px-8 h-20 bg-slate-100 shadow-sm border-b">

      {/* LEFT: Logo */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-blue-700 text-2xl">
          LINKUP
        </Link>
      </div>

      {/* CENTER: Navigation + Search */}
      <div className="hidden md:flex w-full lg:w-[55%] text-sm items-center justify-between px-2 gap-4">

        {/* Nav Links */}
        <div className="flex gap-x-4 text-gray-600 items-center">
          {[
            { href: "/", icon: House, label: "Homepage" },
            { href: "/", icon: Contact, label: "Friends" },
            { href: "/", icon: CircleFadingPlus, label: "Stories" },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              <Icon className="text-blue-600 w-5 h-5" />
              <span className="text-base">{label}</span>
            </Link>
          ))}
        </div>

        {/* Search */}
        <SearchInput />
      </div>

      {/* RIGHT: Icons & Auth */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-6 justify-end">

        <ClerkLoading>
          <Loading />
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:flex gap-3 items-center text-blue-600">
              <CircleUser className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
              <MessageCircleCode className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
              <BellDot className="w-5 h-5 hover:text-black transition-colors cursor-pointer" />
            </div>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <div className="flex gap-2 items-center text-lg">
              <LogIn className="text-blue-600 w-5 h-5" />
              <Link
                href="/sign-in"
                className="hover:underline hover:text-blue-600"
              >
                Login / Register
              </Link>
            </div>
          </SignedOut>
        </ClerkLoaded>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
