import { ImageType } from "./type";
import Image, { StaticImageData } from "next/image";

const ImageCom = ({
  src,
  alt,
  type = "rounded",
  width,
  height,
  className,
  ...props
}: ImageType) => {
  const nextImage: StaticImageData = {
    src: src,
    width: width,
    height: height,
  };
  return (
    <Image
      src={nextImage}
      alt={alt}
      {...props}
      className={"object-contain object-center " + className}
    />
  );
};

export default ImageCom;
