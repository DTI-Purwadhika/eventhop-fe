import { Collection } from "@/components/elements";
import { Search, Filterbar, Sortbar } from "@/components/navigations";
import { ArrowDownWideNarrow } from "lucide-react";

const SearchPage = () => {
  return (
    <div className="wrapper px-2 py-4">
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <ArrowDownWideNarrow />
        </div>
        <div className="col-span-5">
          <Search />
        </div>
        <div className="col-span-2">
          <Filterbar />
          <Sortbar />
        </div>
      </div>
      <Collection
        emptyDescription="No Event Found"
        type="all_events"
        emptyTitle="No Events"
        filter=""
        limit={10}
      />
    </div>
  );
};
export default SearchPage;
