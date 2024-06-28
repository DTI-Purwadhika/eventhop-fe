import { Heading } from "@/components/typhographies";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Filter } from "lucide-react";

const Filterbar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Filter />
      </DrawerTrigger>
      <DrawerContent className="bg-white">
        <div className="my-4 mx-4">
          <Heading size="h3">Filter</Heading>
          <Heading size="h5">Category</Heading>
          tehe
          <Heading size="h5">Location</Heading>
          tehe
          <Heading size="h5">Price</Heading>
          tehe
          <Heading size="h5">Date</Heading>
          tehe
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default Filterbar;
