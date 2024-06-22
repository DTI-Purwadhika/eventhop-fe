import { Link } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { ChildType } from "@/types";
import { ButtonType } from "./type";

const ButtonCom = ({
  children,
  url = "#",
  className = "",
}: ChildType & ButtonType) => (
  <Button
    size="lg"
    className={`button rounded-full w-full sm:w-fit color-primary-500 ${className}`}
  >
    <Link href={url}>{children}</Link>
  </Button>
);
export default ButtonCom;
