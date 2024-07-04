import { CategoryCon, EventCon, HeroCon } from "@/components/containers";

const Home = () => (
  <>
    <HeroCon />
    <div className="w-full">
      <aside></aside>
      <div>
        <CategoryCon />
        <EventCon filter="popular" />
        <EventCon filter="month" />
        <EventCon filter="location" />
      </div>
    </div>
  </>
);

export default Home;
