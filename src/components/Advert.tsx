import Image from "next/image";
import React from "react";

const Advert = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-3">
      {/* Header */}
      <h3 className="font-semibold text-gray-700">Sponsored Ads</h3>

      {/* Ad Image */}
      <div
        className={`w-full rounded-lg overflow-hidden bg-gray-200 ${
          size === "sm" ? "h-24" : size === "lg" ? "h-48" : "h-36"
        }`}
      >
        {/* Placeholder image */}
        <div className="w-full h-full bg-gray-300" />
        <Image
          src=""
          alt=""
          height={20}
          width={30}
        />
      </div>

      {/* Ad Content */}
      <div>
        <h4 className="text-gray-800 font-medium">BigChef Lounge</h4>
        <p className="text-gray-500 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Advert;
