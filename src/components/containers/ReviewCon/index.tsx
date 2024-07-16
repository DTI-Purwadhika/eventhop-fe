"use client";
import { useFeedbacks } from "@/hooks/useFeedback";
import { useState } from "react";
import { SearchType } from "@/shares/types/search";
import ReviewCollection from "@/components/elements/ReviewCollection";

const ReviewCon = ({
  title,
  isReviewed = false,
  userId,
  owner,
}: {
  title: string;
  isReviewed: boolean;
  userId: string;
  owner: "user" | "organizer";
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const feedback: SearchType = {
    filter: `${owner}_id=${userId}`,
    limit: 4,
    page: currentPage,
    sort: "newest",
  };

  const { collectData, totalData } = useFeedbacks(feedback);
  console.log(collectData);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-medium mt-4">{title}</h3>
      <ReviewCollection
        limit={4}
        data={collectData}
        totalData={totalData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isReviewed={isReviewed}
      />
    </div>
  );
};

export default ReviewCon;
