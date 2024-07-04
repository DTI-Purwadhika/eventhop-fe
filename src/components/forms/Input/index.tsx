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
  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
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
  </div>
);
export default InputCom;
