import Image from "next/image";
import React from "react";

interface ProfileHeaderProps {
  userId?: string;
  coverImage?: string;
  profileImage?: string;
  name?: string;
  username?: string;
  bio?: string;
  location?: string;
  school?: string;
  work?: string;
  website?: string;
  joinDate?: string;
  postsCount?: number;
  followersCount?: number;
  followingCount?: number;
  isFollowing?: boolean;
  isOwnProfile?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  userId = "elvaweaver",
  coverImage = "/api/placeholder/800/300",
  profileImage = "/api/placeholder/150/150",
  name = "Elva Weaver",
  username = "elvaweaver",
  bio = "Lorem ipsum dolor sit amet consectetur elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  location = "Denver",
  school = "Edgar High School",
  work = "Apple Inc.",
  website = "lama.dev",
  joinDate = "November 2024",
  postsCount = 142,
  followersCount = 1200,
  followingCount = 1400,
  isFollowing = false,
  isOwnProfile = false,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-60 bg-gradient-to-r from-blue-400 to-purple-500">
        <Image
          src={coverImage}
          alt="Cover photo"
          className="w-full h-full object-cover"
          height={40}
          width={100}
        />

        {/* Edit Cover Button (only for own profile) */}
        {isOwnProfile && (
          <button className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 transition-all duration-200 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Edit Cover
          </button>
        )}
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pb-6">
        {/* Profile Picture */}
        <div className="flex justify-center -mt-16 mb-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
              <Image
                src={profileImage}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
                height={40}
                width={40}
              />
            </div>

            {/* Edit Profile Picture Button (only for own profile) */}
            {isOwnProfile && (
              <button className="absolute bottom-2 right-2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center space-y-4">
          {/* Name and Username */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <p className="text-gray-600">@{username}</p>
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-gray-700 max-w-md mx-auto leading-relaxed">
              {bio}
            </p>
          )}

          {/* Profile Details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {location && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Living in {location}</span>
              </div>
            )}

            {school && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                <span>Went to {school}</span>
              </div>
            )}

            {work && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6"
                  />
                </svg>
                <span>Works at {work}</span>
              </div>
            )}
          </div>

          {/* Website and Join Date */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            {website && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <a
                  href={`https://${website}`}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website}
                </a>
              </div>
            )}

            {joinDate && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Joined {joinDate}</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {postsCount}
              </div>
              <div className="text-sm text-gray-600">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {followersCount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">
                {followingCount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Following</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-3 pt-4">
            {isOwnProfile ? (
              <>
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-200">
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors duration-200">
                  View Archive
                </button>
              </>
            ) : (
              <>
                <button
                  className={`px-6 py-2 font-medium rounded-md transition-colors duration-200 ${
                    isFollowing
                      ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
                <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md transition-colors duration-200">
                  Message
                </button>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
