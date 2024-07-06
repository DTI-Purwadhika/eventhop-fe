import { Icons } from "@/shares/assets/Icon";
import { MouseEventHandler } from "react";

export type ButtonType = {
  url?: string;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "outline"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  backgroundColor?: string;
  icon?: string;
  iconOnly?: "sm" | "md" | "lg" | "all";
};
