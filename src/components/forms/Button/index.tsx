import { Link } from "@/components/navigations";
import { Button } from "@/components/ui/button";

const ButtonCom = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => (
  <Button
    size="lg"
    className="button rounded-full w-full sm:w-fit color-primary-500"
    asChild
  >
    <Link href={url}>{children}</Link>
  </Button>
);
export default ButtonCom;
