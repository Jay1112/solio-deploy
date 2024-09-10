import React from "react";
import SocialTableItem from "./SocialTableItem";

function SocialTable({ tableData }) {
  return (
    <div className="bg-black rounded-md">
      {/* header  */}
      <div className="flex p-4 gap-4 font-poppins text-lg md:border-b-2 border-[#ffffff1e]">
        <p className="min-w-[100px] text-center">Icon</p>
        <p className="min-w-[100px] md:min-w-[200px]">Social</p>
        <p className="flex-1 min-w-[600px]">Link</p>
        <p className="min-w-[200px]">Actions</p>
      </div>
      {/* Rows  */}
      <div>
        {tableData?.map((item) => {
          return <SocialTableItem key={item._id} itemData={item} />;
        })}
      </div>
    </div>
  );
}

export default SocialTable;
