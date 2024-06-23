import { CategoryCon, EventCon, HeroCon } from "@/components/containers";

const Home = () => (
  <>
    <HeroCon />
    <CategoryCon />
    <EventCon filter="popular" />
    <EventCon filter="month" />
    <EventCon filter="location" />
  </>
);

export default Home;
