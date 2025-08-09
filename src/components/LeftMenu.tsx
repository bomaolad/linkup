import React from "react";
import LeftMenuNav from "./LeftMenuNav";
import Advert from "./Advert";

const LeftMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <LeftMenuNav />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-sm text-sm">
        <Advert size="sm" />
      </div>
    </div>
  );
};

export default LeftMenu;
