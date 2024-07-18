import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Dispatch, SetStateAction } from "react";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/forms";
import SortContent from "./SortContent";

type SortType = {
  sort?: string;
  setSort: Dispatch<
    SetStateAction<
      | "nameAz"
      | "nameZa"
      | "newest"
      | "oldest"
      | "early_date"
      | "far_date"
      | "low_price"
      | "high_price"
      | undefined
    >
  >;
};
const Sortbar = ({ sort, setSort }: SortType) => {
  const handleSort = (value: any) => {
    setSort(value);
  };
  return (
    <Drawer>
      <DrawerTrigger>
        <ListFilter />
      </DrawerTrigger>
      <DrawerContent className="bg-white px-8 pb-8">
        <SortContent sort={sort} handleSort={handleSort} />
        <DrawerClose>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};
export default Sortbar;
