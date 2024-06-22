import { ChildType } from "@/types";
import TextType from "./type";

const Text = ({
  children,
  size = 14,
  type = "p",
  weight = "regular",
  color = "grey-500",
  align = "left",
  className = "",
}: ChildType & TextType) => {
  const TextType = (type || "p") as keyof JSX.IntrinsicElements;
  return (
    <TextType
      className={`text-${align} ${type}-${weight}-${size} text-${color} ${className}`}
    >
      {children}
    </TextType>
  );
};

export default Text;
