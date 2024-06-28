import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ListFilter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const Sortbar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <ListFilter />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <RadioGroup defaultValue="name" className="mx-8 mt-4 mb-8">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="name" id="r1" />
            <Label htmlFor="r1">Name</Label>
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
      </DrawerContent>
    </Drawer>
  );
};
export default Sortbar;
