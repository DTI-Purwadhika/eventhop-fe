import HeadingType from "./type";
import { ChildType } from "@/shares/types";

const Heading = ({
  children,
  size,
  align = "left",
  weight = "bold",
  className = "",
}: ChildType & HeadingType) => {
  const map: Record<HeadingType["size"], keyof JSX.IntrinsicElements> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
  };
  const Head = map[size];
  return (
    <Head className={`text-${align} ${size}-${weight} ${className}`}>
      {children}
    </Head>
  );
};

export default Heading;
