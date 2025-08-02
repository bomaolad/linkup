import Image from "next/image";
import React from "react";

const Stories = () => {
  return <div className="p-8 bg-white rounded-lg overflow-scroll text-sm scrollbar-hidden">
    <div className="flex gap-8 w-max">

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33271416/pexels-photo-33271416.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Ahmad</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Ibrahim</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Khadijah</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Muslimah</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Toyyib</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Salma</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Maryam</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">A.Qowiyy</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">Muhammad</span>
      </div>

      {/* STORY  */}
      <div className="flex flex-col items-center gap-2 cursor-pointer">
        <Image src="https://images.pexels.com/photos/33265724/pexels-photo-33265724.jpeg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
        <span className="font-medium">A.Wahab</span>
      </div>
    </div>
  </div>;
};

export default Stories;
