import React from "react";
import NavbarLayout from "../layouts/NavbarLayout";
import LazyImage from "../components/ui/LazyImage";
import ProductPageImage from "../assets/product-page.png";

function ProductPage() {
  return (
    <NavbarLayout>
      <div className="flex items-center justify-start text-light flex-col">
        <div className="pt-20 px-4 md:px-0  animated animatedFadeInUp fadeInUp">
          <p className="text-center tag-line-text text-[52px] md:text-[56px] font-poppins leading-[64px] md:leading-[64px]">
            show & spread your all
          </p>
          <p className="text-center tag-line-text text-[52px] md:text-[56px] font-poppins leading-[64px] md:leading-[64px]">
            social media presence from one place.
          </p>
        </div>
        <div className="pt-6 px-4 md:px-0 text-secondary font-poppins text-[16px] md:text-[24px] animated animatedFadeInUp fadeInUp">
          <p className="text-center leading-[24px] md:leading-[32px] md:flex md:flex-col">
            <span className="md:inline-block">
              Solio enables social media influencers and celebrities{" "}
            </span>
            <span className="md:inline-block">
              to spread their social presence and showcase to the world via
              one-link.
            </span>
          </p>
        </div>
        <div className="px-4 py-12 md:px-0 animated animatedFadeInUp fadeInUp">
          <LazyImage
            src={ProductPageImage}
            width={1920}
            height={1080}
            imageStyle="w-full md:w-[75%] mx-auto rounded-sm border-[1px] border-subsecondary"
            alt="Product Dashboard"
          />
        </div>
      </div>
    </NavbarLayout>
  );
}

export default ProductPage;
