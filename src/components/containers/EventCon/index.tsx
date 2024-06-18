import { Collection } from "@/components/elements";
import EventConType from "./type";

const EventCon = ({ groupBy }: EventConType) => (
  <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
    <h2 className="h2-bold">
      Trusted By <br /> Thousands of Events
    </h2>
    <div className="flex w-full flex-col gap-5 md:flex-row">
      Search CategoryFilter
    </div>
    <Collection
      data={[]}
      emptyTitle="Events Not Found"
      emptyDescription="Sorry, we couldn't find any events matching your search. Please try again with different keywords."
      type="all_events"
      limit={6}
      page={1}
      totalPages={2}
    />
  </section>
);

export default EventCon;
