import { CategoryCon, EventCon, HeroCon } from "@/components/containers";

const Home = () => (
  <>
    <HeroCon />
    <CategoryCon />
    <EventCon filter="popular" limit={6} />
    <EventCon filter="month" limit={6} />
    <EventCon filter="location" limit={6} />
  </>
);

export default Home;
