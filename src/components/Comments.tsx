import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/16563223/pexels-photo-16563223.jpeg"
          alt=""
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
      </div>

      {/* COMMENT */}
      <div></div>
    </div>
  );
};

export default Comments;
