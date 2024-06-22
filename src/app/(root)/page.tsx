import { EventCon, HeroCon } from "@/components/containers";

const Home = () => (
  <>
    <HeroCon />
    <EventCon filter="popular" />
    <EventCon filter="month" />
    <EventCon filter="location" />
  </>
);

export default Home;
