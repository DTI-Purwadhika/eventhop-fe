import { CategoryCon } from "@/components/containers";

const SearchPage = () => {
  return (
    <div className="px-2 md:px-12 lg:px-16 xl:px-24 py-4">
      <CategoryCon limit={24} />
    </div>
  );
};
export default SearchPage;
