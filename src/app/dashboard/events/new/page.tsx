import EventForm from "@/components/containers/EventFormCon";
import { Heading } from "@/components/typhographies";

const CreateEvent = () => (
  <>
    <Heading size="h3">Create Event</Heading>
    <EventForm type="create" />
  </>
);

export default CreateEvent;
