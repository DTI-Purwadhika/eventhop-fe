import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/forms";

const BasicCard = () => {
  return (
    <Card className="px-2 py-2 rounded-none text-center">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Host a new Event!</CardTitle>
        <CardDescription>
          Host and let another Hopper hop to your event!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:pt-2 md:p-4 ">
        <Button size="sm" className="w-full" icon="PartyPopper">
          Become a Host
        </Button>
      </CardContent>
    </Card>
  );
};
export default BasicCard;
