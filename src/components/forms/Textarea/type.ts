import { ControllerRenderProps } from "react-hook-form";

export type TextareaType = {
  label: string;
  placeholder: string;
  field?: ControllerRenderProps<any, any>;
  value?: any;
  onChange?: (e: any) => void;
};
