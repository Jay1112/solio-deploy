import React from "react";

function BlogBody({ itemData }) {
  return (
    <div className="px-2 py-2">
      <h5 className="text-xl font-bold tracking-tight text-white font-monster">
        {itemData?.customData?.title}
      </h5>
      <p className="font-normal text-secondary dark:text-gray-400 line-clamp-2">
        {itemData?.customData?.description} {itemData?.customData?.description} {itemData?.customData?.description}
      </p>
      <p className="mt-2">
        <span className="inline-block rounded-sm px-[12px] py-[4px] bg-subprimary text-sm">
          {itemData?.type}
        </span>
        <span className="ml-2 inline-block rounded-sm px-[12px] py-[4px] bg-subprimary text-sm">
        {itemData?.customData?.author}
        </span>
      </p>
    </div>
  );
}

export default BlogBody;
