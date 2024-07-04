import Collection from "@/components/elements/Collection";
import { Heading } from "@/components/typhographies";
import { GetAllEventsParams } from "@/types";

const EventCon = ({ filter }: GetAllEventsParams) => {
  let headTitle = "";

  switch (filter) {
    case "popular":
      headTitle = "Currently Popular Event at EVENT HOP!";
      break;
    case "month":
      headTitle = "This Event Almost Start!";
      break;
    case "location":
      headTitle = "Best Event Near You!";
      break;
    default:
      headTitle = "";
      break;
  }
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <Heading size="h2">{headTitle}</Heading>
      <Collection
        filter={filter}
        limit={4}
        emptyTitle="No Events"
        emptyDescription="Sorry, we couldn't find any events."
        type="all_events"
      />
    </section>
  );
};

export default EventCon;
