import React from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700">Friend Requests</h3>
        <Link className="text-blue-500 text-xs hover:underline" href="/">
          See all
        </Link>
      </div>

      {/* Friend Request Item */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-gray-700 font-medium">Fannie Bridges</span>
        </div>
        <div className="flex gap-1">
          <button className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <Check className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Friend Request Item */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/*<div className="w-8 h-8 rounded-full bg-gray-200" />*/}
          <Image
            src="https://www.freepik.com/pikaso/explore/113317"
            alt=""
            height={20}
            width={20}
            className="w-8 h-8 rounded-full bg-gray-200"
          />
          <span className="text-gray-700 font-medium">Ethan Alvarado</span>
        </div>
        <div className="flex gap-1">
          <button className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <Check className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Friend Request Item */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-gray-700 font-medium">Caroline Alexander</span>
        </div>
        <div className="flex gap-1">
          <button className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <Check className="w-4 h-4" />
          </button>
          <button className="p-1 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
