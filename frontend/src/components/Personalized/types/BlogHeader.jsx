import React from "react";
import Button from "../../ui/Button";

function BlogHeader({ itemData }) {
  return (
    <div className="flex flex-col items-center jsutify-center overflow-hidden relative bg-black p-2 rounded-md h-full min-h-[200px]">
      <div className="w-full h-full flex items-center justify-center">
        <p className="poppins">
            <span className="text-2xl">Blog</span>
        </p>
      </div>
      <div className="absolute flex items-center justify-center flex-col top-[5px] right-[5px] p-2">
        <Button
          clickHandler={() => {}}
          className="primary-button  px-2 py-2 text-md md:text-sm flex items-center justify-center rounded-sm"
        >
          <i className="pi pi-pencil"></i>
        </Button>
        <Button
          clickHandler={() => {}}
          className="primary-button mt-1.5  px-2 py-2 text-md md:text-sm flex items-center justify-center rounded-sm"
        >
          <i className="pi pi-trash"></i>
        </Button>
        <a
          href={itemData?.customData?.link}
          target="_blank"
          className="primary-button mt-1.5  px-2 py-2 text-md md:text-sm flex items-center justify-center rounded-sm"
        >
          <i className="pi pi-cart-plus"></i>
        </a>
      </div>
    </div>
  );
}

export default BlogHeader;
