import { InputType } from "./type";

const Input = ({ field, placeholder, icon }: InputType) => (
  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
    {icon}
    <Input placeholder={placeholder} {...field} className="input-field" />
  </div>
);
export default Input;
