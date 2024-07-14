import EventForm from "@/components/containers/EventFormCon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const CreateEvent = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create an Event</CardTitle>
      <CardDescription>{`Host and let another Hopper hop to your event`}</CardDescription>
    </CardHeader>
    <CardContent>
      <EventForm type="create" />
    </CardContent>
  </Card>
);

export default CreateEvent;
