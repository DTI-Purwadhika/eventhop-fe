import type { LinkType } from "./type";
import type { ChildType } from "@/shares/types";
import Link from "next/link";

const index = ({
  children,
  href,
  size = "fit",
  onClick,
  className,
}: LinkType & ChildType) => (
  <Link
    href={href}
    className={`flex ${size == "full" && "w-full"} ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default index;
