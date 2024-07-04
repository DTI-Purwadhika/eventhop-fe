import { ControllerRenderProps } from "react-hook-form";

export type InputType = {
  placeholder: string;
  field?: ControllerRenderProps<any, any>;
  icon?: string;
  onChange?: (e: any) => void;
  className?: string;
  type?: "text" | "number" | "email" | "password";
  isDisabled?: boolean;
  value?: any;
};
