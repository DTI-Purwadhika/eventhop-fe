"use client";

import { Link } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { ChildType } from "@/types";
import { ButtonType } from "./type";

const ButtonCom = ({
  children,
  url = "#",
  className = "",
  variant = "default",
  onClick = () => {},
  disabled = false,
}: ChildType & ButtonType) => (
  <Button
    size="lg"
    className={`button rounded-full w-full sm:w-fit color-primary-500 ${className}`}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
  >
    <Link href={url}>{children}</Link>
  </Button>
);
export default ButtonCom;
