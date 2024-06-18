import { EventCon, HeroCon } from "@/components/containers";

const Home = () => (
  <>
    <HeroCon />
    <EventCon groupBy="popular" />
    <EventCon groupBy="month" />
    <EventCon groupBy="location" />
  </>
);

export default Home;
