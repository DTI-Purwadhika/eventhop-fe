import { Collection } from "@/components/elements";

const SearchPage = () => {
  return (
    <div className="wrapper px-2 py-4">
      <Collection
        emptyDescription="No Event Found"
        type="all_events"
        emptyTitle="No Events"
        filter=""
        limit={6}
      />
    </div>
  );
};
export default SearchPage;
