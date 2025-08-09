"use client";

import React, { useState } from "react";
import { BadgePlus, Send, User } from "lucide-react";

const Comments = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-sm flex-1">
      {/* WRITE COMMENT SECTION */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex gap-3">
          {/* User Avatar */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Comment Input Area */}
          <div className="flex-1 space-y-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 bg-gray-50 rounded-xl resize-none border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              rows={3}
            />

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              {/* Add Photo */}
              <div className="flex items-center gap-2">
                <BadgePlus className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                <span className="text-sm text-gray-500">Add photo</span>
              </div>

              {/* Post Button */}
              <button
                type="button"
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  text.trim()
                    ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
