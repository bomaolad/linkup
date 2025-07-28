"use client";

import React from "react";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="hidden xl:flex items-center px-4 py-2 border border-gray-300 rounded-xl bg-slate-100 hover:border-gray-400 focus-within:border-blue-500 transition">
      <Search className="text-gray-500 mr-2 w-5 h-5" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400 w-full"
      />
    </div>
  );
};

export default SearchInput;
