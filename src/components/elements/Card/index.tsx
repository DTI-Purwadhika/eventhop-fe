import { Image } from "@/components/elements";
import Link from "next/link";
import DeleteConfirmation from "../Alert";
import { CardType } from "./type";
import Icon from "@/shares/assets/Icon";
import { dateOnly } from "@/shares/libs/dateFormatter";

const Card = ({
  event,
  hasOrderLink,
  hidePrice,
  isSmall = false,
}: CardType) => {
  // const { sessionClaims } = getAuth();
  // const userId = sessionClaims?.userId;
  const userId = 1;
  const isEventCreator = event.creatorId === userId;

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event.id}`}
        style={{
          backgroundImage: `url(${event.main_image})`,
        }}
        className="flex-center flex-grow bg-gray-50 bg-center text-gray-500"
      />
      {isEventCreator && !hidePrice && (
        <div className="absolute top-2 right-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event.id}/update`}>
            <Image
              src="/assets/images/edit.png"
              alt="edit"
              width={10}
              height={10}
            />
          </Link>

          <DeleteConfirmation eventId={event.id} />
        </div>
      )}
      <Link
        href={`/events/${event.id}`}
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60 whitespace-nowrap">
              {event.price ? `Rp ${event.price}` : "Free"}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category}
            </p>
          </div>
        )}
        <p className="p-medium-16 p-medium-18 text-grey-500">
          {dateOnly(event.start_date)}
        </p>

        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.name}
        </p>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.name}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event.id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Icon name="MoveUpRight" />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};
export default Card;
