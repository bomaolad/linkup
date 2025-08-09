import Link from "next/link";
import React from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-semibold text-gray-700">User Information</span>
        <Link href="/" className="text-blue-500 text-xs hover:underline">
          See all
        </Link>
      </div>

      {/* User Info */}
      <div className="flex flex-col gap-3">
        <div>
          <span className="block font-medium text-gray-800">Elva Weaver</span>
          <span className="block text-gray-500 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

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

        <div>
          <a
            href="https://linkup.dev"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline text-xs"
          >
            linkup.dev
          </a>
        </div>

        <span className="text-gray-400 text-xs">Joined November 2024</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
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

export default UserInfoCard;
