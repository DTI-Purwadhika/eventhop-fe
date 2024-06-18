import { sizeJudge } from "@/constants";
import { ImageType } from "./type";
import Image, { StaticImageData } from "next/image";

const ImageCom = ({
  src,
  alt,
  type = "rounded",
  width = "md",
  height = "md",
  ...props
}: ImageType) => {
  const nextImage: StaticImageData = {
    src: src,
    width: sizeJudge(width),
    height: sizeJudge(height),
  };
  return <Image src={nextImage} alt={alt} {...props} />;
};

export default ImageCom;
