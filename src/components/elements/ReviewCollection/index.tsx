import { CollectionType } from "@/components/elements/Collection/type";
import { Pagination } from "@/components/layouts";
import ReviewCard from "@/components/elements/ReviewCard";

const ReviewCollection = ({
  limit = 4,
  data,
  totalData,
  currentPage,
  setCurrentPage,
  isReviewed = false,
}: CollectionType & { isReviewed: boolean }) =>
  data && data.length > 0 ? (
    <div className="flex flex-col items-center gap-10 mt-4">
      <ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 `}>
        {data.map((item: any) => (
          <li key={item._id} className="flex justify-center">
            <ReviewCard
              title={item.event_name}
              star={item.rating}
              review={item.review}
              eventId={item.event_id}
              attendee={item.user_name}
              isReviewed={isReviewed}
            />
          </li>
        ))}
      </ul>
      {totalData / limit > 1 && (
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
      <h3 className="p-bold-20 md:h5-bold">No review found</h3>
    </div>
  );

export default ReviewCollection;
