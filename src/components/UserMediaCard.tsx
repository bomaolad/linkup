import Link from "next/link";
import React from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const UserMediaCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700">User Media</h3>
        <Link href="/" className="text-blue-500 text-xs hover:underline">
          See all
        </Link>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-20 rounded-lg bg-gray-200 overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
};
