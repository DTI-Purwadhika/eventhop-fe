import { Pagination } from "@/components/layouts";
import { DataType } from "@/shares/types/data";
import SmallCard from "../Card/SmallCard";
import Card from "../Card";

const CardList = ({
  data,
  totalData,
  limit,
  currentPage,
  type,
  isSmall,
  setCurrentPage,
}: DataType) =>
  data && data.length > 0 ? (
    <div className="flex flex-col items-center gap-10">
      <ul
        className={`grid grid-cols-1 gap-5 ${!isSmall && "md:grid-cols-3 xl:grid-cols-4 xl:gap-10"} `}
      >
        {data.map((item: any) => (
          <li key={item._id} className="flex justify-center">
            {isSmall ? (
              <SmallCard event={item} />
            ) : (
              <Card
                event={item}
                hasOrderLink={type === "event_organized"}
                hidePrice={type === "my_tickets"}
              />
            )}
          </li>
        ))}
      </ul>
      {totalData / limit > 1 && !isSmall && (
        <Pagination
          currentPage={currentPage}
          totalPosts={totalData}
          postsPerPage={limit}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  ) : (
    <div className="wrapper flex-center text-center min-h-[200px] w-full flex-col gap-3py-28">
      <h3 className="p-bold-20 md:h5-bold">No data found</h3>
      <p className="p-regular-14">There is no data for your requirement</p>
    </div>
  );

export default CardList;
