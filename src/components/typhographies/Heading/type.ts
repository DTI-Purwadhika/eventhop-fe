export default interface HeadingType {
  size: "h1" | "h2" | "h3" | "h4" | "h5";
  align?: "left" | "center" | "right";
  weight?: "medium" | "bold";
  className?: string;
}
