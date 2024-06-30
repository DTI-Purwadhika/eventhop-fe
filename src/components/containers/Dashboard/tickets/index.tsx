import { Collection } from "@/components/elements";
import { Button } from "@/components/forms";
import { Heading } from "@/components/typhographies";

const Tickets = async () => {
  // const { sessionClaims } = auth();
  // const userId = sessionClaims?.userId as string;

  //const organizedEvents = await getEventByUser();
  // const organizedEvents = {[]};

  return (
    <section>
      <div className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <Heading size="h3" align="center" className="sm:text-left">
            My Ticket
          </Heading>
          <Button url="/#events" className="hidden sm:flex">
            Explore More Event
          </Button>
        </div>
      </div>
      <div className="wrapper my-8">
        <Collection
          filter=""
          limit={4}
          emptyTitle="No event ticket purchased yet"
          emptyDescription="No worries - you can buy now"
          type="my_tickets"
        />
      </div>
    </section>
  );
};
export default Tickets;
