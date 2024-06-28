import type { LinkType } from "./type";
import type { ChildType } from "@/types";
import Link from "next/link";

const index = ({
  children,
  href,
  size = "fit",
  onClick,
}: LinkType & ChildType) => (
  <Link
    href={href}
    className={`flex ${size == "full" && "w-full"}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default index;
