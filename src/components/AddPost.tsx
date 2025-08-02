import Image from "next/image";
import React from "react";
import { CirclePlus, BadgePlus, Video, Vote, CalendarDays } from 'lucide-react';

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">

      {/* AVATAR + INPUT */}
      <div className="flex items-start gap-3">
        <Image
          src="https://images.pexels.com/photos/33263458/pexels-photo-33263458.jpeg"
          alt="User Avatar"
          className="rounded-full object-cover w-10 h-10"
          width={48}
          height={48}
        />

        <div className="flex-1">
          <div className="flex gap-2">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-3 bg-slate-100 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-slate-300"
              rows={2}
            />
            <BadgePlus className="w-5 h-5 text-gray-500 hover:text-black self-end cursor-pointer" />
          </div>
        </div>
      </div>

      {/* POST OPTIONS */}
      <div className="flex gap-4 flex-wrap text-gray-500 items-center">
        {[
          { icon: CirclePlus, label: 'Photo' },
          { icon: Video, label: 'Video' },
          { icon: Vote, label: 'Poll' },
          { icon: CalendarDays, label: 'Events' },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 cursor-pointer hover:text-black transition-colors"
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPost;
