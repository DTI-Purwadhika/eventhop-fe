import Collection from "@/components/elements/Collection";
import { GetAllEventsParams } from "@/types";

const EventCon = (eventProp: GetAllEventsParams) => {
  let headTitle = "";

  switch (eventProp.filter) {
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
      headTitle = "All Events at EVENT HOP!";
      break;
  }
  return (
    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold">{headTitle}</h2>
      <Collection
        data={eventProp}
        emptyTitle="Events Event"
        emptyDescription="Sorry, we couldn't find any events."
        type="all_events"
      />
    </section>
  );
};

export default EventCon;
