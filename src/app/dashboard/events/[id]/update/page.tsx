import EventForm from "@/components/containers/EventFormCon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const UpdateEvent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Update an Event</CardTitle>
      <CardDescription>{`Host and let another Hopper hop to your event`}</CardDescription>
    </CardHeader>
    <CardContent>
      <EventForm type="update" />
    </CardContent>
  </Card>
);

export default UpdateEvent;
