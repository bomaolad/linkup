import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  // Mock media data - replace with actual data fetching
  const mediaItems = [
    {
      id: 1,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 1",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 2",
    },
    {
      id: 3,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 3",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 4",
    },
    {
      id: 5,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 5",
    },
    {
      id: 6,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 6",
    },
    {
      id: 7,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 7",
    },
    {
      id: 8,
      type: "image",
      thumbnail: "/api/placeholder/100/100",
      alt: "User photo 8",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-700">User Media</h3>
        <Link
          className="text-blue-500 text-xs hover:underline"
          href={`/user/${userId}/media`}
        >
          See all
        </Link>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-4 gap-2">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-square bg-gray-100 rounded-md overflow-hidden hover:opacity-80 cursor-pointer transition-opacity"
          >
            <Image
              src={item.thumbnail}
              alt={item.alt}
              className="w-full h-full object-cover"
              height={35}
              width={15}
            />

            {/* Overlay for video type (if needed) */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                <div className="w-6 h-6 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-gray-700 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show message if no media */}
      {mediaItems.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs">No media yet</p>
        </div>
      )}
    </div>
  );
};

export default UserMediaCard;
