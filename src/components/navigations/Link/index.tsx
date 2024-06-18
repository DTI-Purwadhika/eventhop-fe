import type { LinkType } from "./type";
import type { ChildType } from "@/types";
import Link from "next/link";

const index = ({ children, href }: LinkType & ChildType) => (
  <Link href={href}>{children}</Link>
);

export default index;
