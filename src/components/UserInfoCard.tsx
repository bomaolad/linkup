import Link from "next/link";
import React from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const UserInfoCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700">User Information</h3>
        <Link href="/" className="text-blue-500 text-xs hover:underline">
          See all
        </Link>
      </div>

      {/* User Info */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-800">Elva Weaver</h4>
        <p className="text-gray-500 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Info items */}
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4 text-green-500" />
          <span>Living in Denver</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <GraduationCap className="w-4 h-4 text-gray-500" />
          <span>Went to Edgar High School</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4 text-gray-500" />
          <span>Works at Apple Inc.</span>
        </div>

        {/* Website */}
        <a
          href="https://lama.dev"
          target="_blank"
          className="block text-blue-500 hover:underline text-xs"
        >
          lama.dev
        </a>

        {/* Join date */}
        <p className="text-gray-400 text-xs">Joined November 2024</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-xs font-medium">
          Following
        </button>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-md text-xs font-medium">
          Block User
        </button>
      </div>
    </div>
  );
};
