import type { InputType } from "./type";
import { Input } from "@/components/ui/input";

const InputCom = ({
  field,
  placeholder,
  onChange,
  className,
  type = "text",
  isDisabled = false,
  value,
}: InputType) => (
  <Input
    placeholder={placeholder}
    {...field}
    className={`input-field ${className}`}
    onChange={onChange}
    type={type}
    disabled={isDisabled}
    value={value}
    min={0}
    step={1}
  />
);
export default InputCom;
