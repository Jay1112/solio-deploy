import React from "react";

function ProductBody({ itemData }) {
  return (
    <div className="px-2 py-2">
      <h5 className="text-xl font-bold tracking-tight text-white font-monster">
        {itemData?.customData?.name}
      </h5>
      <p className="font-normal text-secondary dark:text-gray-400">
        {itemData?.customData?.description}
      </p>
      <p className="mt-2">
        <span className="inline-block rounded-sm px-[12px] py-[4px] bg-subprimary text-sm">
          {itemData?.type}
        </span>
        <span className="inline-block rounded-sm px-[12px] py-[4px] ml-2 bg-subprimary text-sm">
          {itemData?.customData?.category}
        </span>
      </p>
    </div>
  );
}

export default ProductBody;
