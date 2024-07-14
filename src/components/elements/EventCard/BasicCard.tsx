import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BasicCard = () => {
  return (
    <Card className="px-2 py-2 rounded-none">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Host a new Event!</CardTitle>
        <CardDescription>
          Host and let another Hopper hop to your event!
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full">
          Become a Host
        </Button>
      </CardContent>
    </Card>
  );
};
export default BasicCard;
