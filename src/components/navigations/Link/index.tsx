import Link from "next/link";

const index = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => <Link href="#events">{children}</Link>;

export default index;
