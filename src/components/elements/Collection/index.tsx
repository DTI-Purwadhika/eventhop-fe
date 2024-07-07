import { CollectionType } from "./type";
import { DataTableCon } from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import CardList from "../CardList";

const Collection = ({
  title = "",
  column,
  limit = 6,
  type,
  isSmall = false,
  data,
  totalData,
  currentPage,
  setCurrentPage,
  noCrud,
}: CollectionType & SearchType) => {
  return column ? (
    <DataTableCon
      title={title}
      columns={column}
      data={data}
      totalData={totalData}
      limit={limit}
      currentPage={currentPage}
      type={type}
      setCurrentPage={setCurrentPage}
      noCrud={noCrud}
    />
  ) : (
    <CardList
      data={data}
      totalData={totalData}
      limit={limit}
      currentPage={currentPage}
      type={type}
      isSmall={isSmall}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Collection;
