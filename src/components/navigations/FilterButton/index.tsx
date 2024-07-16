import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "@/shares/assets/Icon";
import { ChildType } from "@/shares/types";

const FilterButton = ({
  children,
  icon = "Filter",
}: ChildType & { icon?: string }) => (
  <Popover>
    <PopoverTrigger className="border px-2 rounded-xl transition-all hover:bg-slate-100">
      <Icon name={icon} />
    </PopoverTrigger>
    <PopoverContent className="mt-2 w-fit mr-10">{children}</PopoverContent>
  </Popover>
);

export default FilterButton;
