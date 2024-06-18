import Card from "../Card";

type CollectionProps = {
  data: any;
  emptyTitle: string;
  emptyDescription: string;
  type: "all_events" | "event_organized" | "my_tickets";
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};
const Collection = ({
  data,
  emptyTitle,
  emptyDescription,
  type,
  limit,
  page,
  totalPages,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 xl:grid-cols-4">
            {data.map((item: any, index: number) => {
              const hasOrderLink = type === "event_organized";
              const hidePrice = type === "my_tickets";
              return (
                <li key={item._id} className="flex justify-center">
                  <Card
                    event={item}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>
          {data[0].title}
        </div>
      ) : (
        <div className="wrapper flex-center text-center min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyDescription}</p>
        </div>
      )}
    </>
  );
};
export default Collection;
