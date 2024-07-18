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
          Event that almost start!
        </Heading>
        <EventCon sort="early_date" />
        <Heading size="h3" weight="bold">
          Free Event!
        </Heading>
        <EventCon filter="&ticket_type.0.price=0" sort="early_date" />
        <Heading size="h3" weight="bold">
          Attend Online Event from Your Location!
        </Heading>
        <EventCon filter="&location_like=online" sort="early_date" />
      </div>
    </div>
  </>
);

export default Home;
