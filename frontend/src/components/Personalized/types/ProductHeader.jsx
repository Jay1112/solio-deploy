import React from "react";
import Button from "../../ui/Button";
import LazyImage from "../../ui/LazyImage";

function ProductHeader({ itemData }) {
  return (
    <div className="flex items-center jsutify-center overflow-hidden relative bg-black p-2 rounded-md">
      <LazyImage
        src={itemData?.customData?.image}
        width={200}
        height={200}
        imageStyle="w-full rounded-md"
      />
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

export default ProductHeader;
