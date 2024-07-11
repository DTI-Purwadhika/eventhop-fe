"use client";

import { Link } from "@/components/navigations";
import { Button } from "@/components/ui/button";
import { ChildType } from "@/shares/types";
import { ButtonType } from "./type";
import Icon from "@/shares/assets/Icon";

const ButtonCom = ({
  children,
  url = "#",
  className = "",
  variant = "default",
  onClick = () => {},
  disabled = false,
  iconOnly,
  icon,
  size = "lg",
  type = "button",
}: ChildType & ButtonType) => (
  <Button
    size={iconOnly === "all" ? "icon" : size}
    className={`rounded-xl ${className}`}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {url === "#" ? (
      <div className="flex gap-2">
        {icon && (
          <Icon
            name={icon}
            className={`${iconOnly === "all" && "ml-2"} h-5 w-5`}
          />
        )}
        <div
          className={
            iconOnly === "md"
              ? "hidden lg:block"
              : iconOnly === "sm"
                ? "hidden md:block"
                : ""
          }
        >
          {children}
        </div>
      </div>
    ) : (
      <Link href={url} className="flex gap-2">
        {icon && <Icon name={icon} className={`h-5 w-5`} />}
        <div
          className={
            iconOnly === "md"
              ? "hidden lg:block"
              : iconOnly === "sm"
                ? "hidden md:block"
                : ""
          }
        >
          {children}
        </div>
      </Link>
    )}
  </Button>
);
export default ButtonCom;
