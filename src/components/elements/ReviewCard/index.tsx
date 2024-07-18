import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ReviewDialog } from "@/components/forms";
import { ReviewType } from "./type";
import Link from "next/link";

const ReviewCard = ({
  title,
  star,
  review,
  eventId,
  attendee,
  isReviewed,
}: ReviewType) => {
  return (
    <Link href={isReviewed ? `/event/${eventId}` : "#"}>
      <Card className="w-full h-full">
        <CardContent className="items-center text-center py-4 px-auto">
          <div className={isReviewed ? "block" : "hidden"}>
            {Array(star).fill("⭐️")}
          </div>
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <p
            className={`text-xs text-muted-foreground my-4 ${isReviewed ? "block" : "hidden"}`}
          >
            {review}
          </p>
          <p
            className={`text-sm text-foreground font-medium ${isReviewed ? "block" : "hidden"}`}
          >
            {attendee}
          </p>
          <ReviewDialog
            name={title}
            id={eventId}
            className={`${isReviewed && "hidden"} mt-4`}
          />
        </CardContent>
      </Card>
    </Link>
  );
};
export default ReviewCard;
