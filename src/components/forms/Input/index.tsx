import type { InputType } from "./type";
import { Input } from "@/components/ui/input";

const InputCom = ({ field, placeholder }: InputType) => (
  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
    <Input placeholder={placeholder} {...field} className="input-field" />
  </div>
);
export default InputCom;
