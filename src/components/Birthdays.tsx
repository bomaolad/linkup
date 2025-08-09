import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm space-y-4">
      {/* Header */}
      <h3 className="font-semibold text-gray-700">Birthdays</h3>

      {/* Today's Birthday */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-gray-700 font-medium">Fannie Bridges</span>
        </div>
        <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-md hover:bg-blue-600 transition-colors">
          Celebrate
        </button>
      </div>

      {/* Upcoming Birthdays */}
      <div className="pt-2 border-t border-gray-100">
        <p className="text-gray-500 text-xs">Upcoming Birthdays</p>
        <p className="text-gray-400 text-xs">
          See other 16 have upcoming birthdays
        </p>
      </div>
    </div>
  );
};

export default Birthdays;
