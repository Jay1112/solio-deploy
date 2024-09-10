import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyImage = ({ src, alt, width, height, imageStyle = "" }) => (
  <LazyLoadImage
    className={`${imageStyle}`}
    alt={alt}
    height={height}
    src={src}
    width={width}
  />
);

export default LazyImage;
