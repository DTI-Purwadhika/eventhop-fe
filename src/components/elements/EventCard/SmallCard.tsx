import { Image } from "@/components/elements";
import Link from "next/link";
import DeleteConfirmation from "../Alert";
import { CardType } from "./type";
import Icon from "@/shares/assets/Icon";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { Text } from "@/components/typhographies";

const SmallCard = ({ event, hidePrice, isSmall = false }: CardType) => {
  // const { sessionClaims } = getAuth();
  // const userId = sessionClaims?.userId;
  const userId = 1;
  const isEventCreator = event.creatorId === userId;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-500 bg-opacity-50 shadow-md transition-all hover:shadow-lg ">
      <Image
        src={event.main_image}
        height={30}
        width={150}
        alt="event image"
        className="w-full object-contain"
      />
      <p className="text-white font-medium text-xs mx-4 my-2">{event.name}</p>
    </div>
  );
};
export default SmallCard;
