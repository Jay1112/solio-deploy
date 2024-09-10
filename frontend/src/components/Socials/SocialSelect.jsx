import clsx from "clsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function PlatformItem({ itemData, handleSelect }) {
  function handleItemClicked(e) {
    handleSelect(itemData);
  }

  return (
    <p
      className="my-4 p-4 rounded-md border-2 border-primary hover:bg-transparent bg-primary cursor-pointer transition-all duration-300 flex items-center justify-start"
      onClick={handleItemClicked}
    >
      <i className={`pi pi-${itemData.icon} text-2xl`}></i>
      <span className="inline-block ml-2 text-lg">{itemData.name}</span>
    </p>
  );
}

function SocialSelect({ platform, handleSelectPlatform }) {
  const [showOptions, setShowOptions] = useState(false);
  const social = useSelector((state) => state.social);

  function handlePlatformSelection(item) {
    handleSelectPlatform({
      label: item.name,
      value: item.icon,
      id: item._id,
    });
    setShowOptions(false);
  }

  return (
    <div>
      <p className="font-poppins py-2">Select Social</p>
      <div className="flex relative">
        <div
          className="primary-button cursor-pointer p-2.5 flex items-center justify-center rounded-sm"
          onClick={(e) => setShowOptions(!showOptions)}
        >
          <i className={clsx(`pi pi-${platform.value} text-xl mr-4`)}></i>
          <i
            className={clsx(
              "pi pi-angle-up text-xl",
              showOptions && "rotate-180"
            )}
          ></i>
        </div>
        <p className=" flex-1 flex items-center ml-4 px-2 rounded-sm text-xl z-10">
          {platform.label}
        </p>
        {showOptions && (
          <div className="bg-black border-2 border-subsecondary rounded-md px-4 absolute mt-2 top-full w-full">
            {social.platformsList &&
              social.platformsList.map((item) => {
                return (
                  <PlatformItem
                    key={item._id}
                    itemData={item}
                    handleSelect={handlePlatformSelection}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SocialSelect;
