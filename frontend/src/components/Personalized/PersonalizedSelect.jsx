import clsx from "clsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function PersonalizedTypeItem({ itemData, handleSelect }) {
  function handleItemClicked(e) {
    let icon = "";
    let name = "";
    switch (itemData) {
      case "blog":
        icon = "clipboard";
        name = "Blog";
        break;
      case "achievement":
        icon = "sparkles";
        name = "Achievement";
        break;
      case "product":
        icon = "shopping-bag";
        name = "Product";
        break;
    }
    handleSelect({
      name,
      icon,
      id: itemData,
    });
  }

  return (
    <p
      className="p-2 rounded-sm border-2 border-primary hover:bg-transparent bg-primary cursor-pointer transition-all duration-300 flex items-center justify-start"
      onClick={handleItemClicked}
    >
      {itemData === "blog" && (
        <>
          <i className={`pi pi-clipboard text-sm`}></i>
          <span className="inline-block ml-2 text-sm">Blog</span>
        </>
      )}
      {itemData === "achievement" && (
        <>
          <i className={`pi pi-sparkles text-sm`}></i>
          <span className="inline-block ml-2 text-sm">Achievement</span>
        </>
      )}
      {itemData === "product" && (
        <>
          <i className={`pi pi-shopping-bag text-sm`}></i>
          <span className="inline-block ml-2 text-sm">Product</span>
        </>
      )}
    </p>
  );
}

function PersonalizedSelect({ personalizedType, handleSelectPersonalized }) {
  const [showOptions, setShowOptions] = useState(false);
  const personalized = useSelector((state) => state.personalized);
  const [personalizedTypes, setPeronsalizedTypesList] = useState(
    Object.keys(personalized?.personalizedTypesList)
  );

  function handleSelectPersonalizedType(item) {
    handleSelectPersonalized({
      label: item.name,
      value: item.icon,
      id: item._id,
    });
    setShowOptions(false);
  }

  return (
    <div>
      <p className="font-poppins py-2">Select Type</p>
      <div className="flex relative">
        <div
          className="primary-button cursor-pointer p-2.5 flex items-center justify-center rounded-sm"
          onClick={(e) => setShowOptions(!showOptions)}
        >
          <i
            className={clsx(`pi pi-${personalizedType.value} text-xl mr-4`)}
          ></i>
          <i
            className={clsx(
              "pi pi-angle-up text-xl",
              showOptions && "rotate-180"
            )}
          ></i>
        </div>
        <p className=" flex-1 flex items-center ml-4 px-2 rounded-sm text-xl z-10">
          {personalizedType.label}
        </p>
        {showOptions && (
          <div className="flex flex-wrap gap-2 bg-black border-2 border-subsecondary rounded-md absolute mt-2 top-full w-full p-4">
            {personalizedTypes?.map((item) => {
              return (
                <PersonalizedTypeItem
                  key={item}
                  itemData={item}
                  handleSelect={handleSelectPersonalizedType}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalizedSelect;
