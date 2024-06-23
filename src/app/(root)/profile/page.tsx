import { Collection } from "@/components/elements";
import { Button } from "@/components/forms";
import { Heading } from "@/components/typhographies";
import { auth } from "@clerk/nextjs/server";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  //const organizedEvents = await getEventByUser();
  // const organizedEvents = {[]};

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <Heading size="h3" align="center" className="sm:text-left">
            My Ticket
          </Heading>
          <Button url="/#events" className="hidden sm:flex">
            Explore More Event
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          filter=""
          limit={4}
          emptyTitle="No event ticket purchased yet"
          emptyDescription="No worries - you can buy now"
          type="my_tickets"
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <Heading size="h3" align="center" className="sm:text-left">
            Event Organized
          </Heading>
          <Button url="/events/create" className="hidden sm:flex">
            Create a new event
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          filter=""
          limit={4}
          emptyTitle="No event have been created yet"
          emptyDescription="Create one?"
          type="event_organized"
        />
      </section>
    </>
  );
};
export default ProfilePage;
