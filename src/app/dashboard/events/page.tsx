import { Collection } from "@/components/elements";
import { Button } from "@/components/forms";
import { Heading } from "@/components/typhographies";

const Events = () => {
  return (
    <section className="overflow-auto">
      <Heading size="h2" className="mb-8">
        Active Event
      </Heading>
      <Button url="/dashboard/events/create">Create Event</Button>
      <Collection
        filter="popular"
        limit={4}
        emptyTitle="No Events"
        emptyDescription="Sorry, we couldn't find any events."
        type="all_events"
      />
      <Heading size="h2">Past Event</Heading>
      <Collection
        filter="popular"
        limit={4}
        emptyTitle="No Events"
        emptyDescription="Sorry, we couldn't find any events."
        type="all_events"
      />
    </section>
  );
};
export default Events;
