export default interface TextType {
  size?: number;
  type?: "p" | "span";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: string;
  align?: "left" | "center" | "right";
}
