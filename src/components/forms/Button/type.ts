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
};
