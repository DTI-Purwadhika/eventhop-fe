import { Button } from "@/components/forms";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Icon from "@/shares/assets/Icon";
import { ChildType } from "@/shares/types";

const FilterButton = ({ children }: ChildType) => (
  <Popover>
    <PopoverTrigger className="border px-2 rounded-xl transition-all hover:bg-slate-100">
      <Icon name="Filter" />
    </PopoverTrigger>
    <PopoverContent className="mt-2 w-4/5 -mr-40">{children}</PopoverContent>
  </Popover>
);

export default FilterButton;
