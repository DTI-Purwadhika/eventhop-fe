import { CategoryCon, EventCon, HeroCon } from "@/components/containers";
import { Heading } from "@/components/typhographies";

const Home = () => (
  <>
    <HeroCon />
    <div className="w-full px-4 lg:px-20">
      <aside></aside>
      <div>
        <CategoryCon />
        <Heading size="h3" weight="bold">
          Check out this Event!
        </Heading>
        <EventCon filter="popular" />
        <Heading size="h3" weight="bold">
          Best Event This Month!
        </Heading>
        <EventCon filter="month" />
        <Heading size="h3" weight="bold">
          Event Near You!
        </Heading>
        <EventCon filter="location" />
      </div>
    </div>
  </>
);

export default Home;
