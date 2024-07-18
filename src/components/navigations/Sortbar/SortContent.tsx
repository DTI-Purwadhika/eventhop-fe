import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ListFilter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { GetAllEventsParams } from "@/shares/types";

const SortContent = ({
  sort,
  handleSort,
}: {
  sort?: string;
  handleSort: (value: string) => void;
}) => {
  return (
    <div>
      <RadioGroup
        defaultValue={sort}
        className="mt-4 mb-8"
        onValueChange={handleSort as any}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="nameAz" id="r0" />
          <Label htmlFor="r0">Name A-Z</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="nameZa" id="r1" />
          <Label htmlFor="r1">Name Z-A</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="newest" id="r2" />
          <Label htmlFor="r2">Newest</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oldest" id="r3" />
          <Label htmlFor="r3">Oldest</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="early_date" id="r4" />
          <Label htmlFor="r4">Early Date</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="far_date" id="r5" />
          <Label htmlFor="r5">Far Date</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low_price" id="r6" />
          <Label htmlFor="r6">Lowest Price</Label>
        </div>
        <Separator />
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="high_price" id="r7" />
          <Label htmlFor="r7">Highest Price</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
export default SortContent;
