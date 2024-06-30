import { CategoryCon } from "@/components/containers";
import { Search, Filterbar, Sortbar } from "@/components/navigations";
import { ArrowDownWideNarrow } from "lucide-react";

const SearchPage = () => {
  return (
    <div className="wrapper px-2 py-4">
      <CategoryCon limit={24} />
    </div>
  );
};
export default SearchPage;
