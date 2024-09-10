import React from "react";
// import Accordian from '../ui/Accordian'
import ProductHeader from "./types/ProductHeader";
import ProductBody from "./types/ProductBody";
import Card from "../ui/Card";
import BlogHeader from "./types/BlogHeader";
import BlogBody from "./types/BlogBody";

function PersonalizedItem({ itemData = null }) {
  return (
    <>
      {itemData.type === "product" && (
        <Card
          HeaderComponent={<ProductHeader itemData={itemData} />}
          BodyComponent={<ProductBody itemData={itemData} />}
          cardStyle="min-w-[200px] bg-transparent border-2 border-subsecondary bg-black rounded-md mb-4"
          headerStyle=""
        />
      )}
      {itemData.type === "blog" && (
        <Card
          HeaderComponent={<BlogHeader itemData={itemData} />}
          BodyComponent={<BlogBody itemData={itemData} />}
          cardStyle="min-w-[200px] flex flex-col bg-transparent border-2 border-subsecondary bg-black rounded-md mb-4"
          headerStyle="flex-1"
        />
      )}
    </>
  );
}

export default PersonalizedItem;
