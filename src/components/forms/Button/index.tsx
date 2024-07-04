"use client";

import { Link } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { ChildType } from "@/shares/types";
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
    className={`rounded-2xl sm:w-fit ${className}`}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
  >
    <Link href={url}>{children}</Link>
  </Button>
);
export default ButtonCom;
