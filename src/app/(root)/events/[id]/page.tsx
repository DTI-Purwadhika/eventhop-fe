import { Collection, Image } from "@/components/elements";
import { Heading, Text } from "@/components/typhographies";
import { SearchParamProps } from "@/types";
import getEventById from "@/utils/getEventDetail";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            // src={event.images[0]}
            src="https://picsum.photos/300/200"
            alt="event image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <Heading size="h2">{event.name}</Heading>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <Text
                    weight="bold"
                    size={20}
                    className="rounded-full bg-green-500/10 px-5 py-2 text-green-600"
                  >
                    {event.price ? `Rp ${event.price}` : "FREE"}
                  </Text>
                  <Text
                    weight="bold"
                    size={20}
                    className="rounded-full bg-grey-500/10 px-5 py-2 text-grey-600"
                  >
                    {event.category}
                  </Text>
                </div>
                <Text size={18} weight="medium" className="ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <Text type="span" className="text-primary-500">
                    {event.organizer.name}
                  </Text>
                </Text>
              </div>
            </div>
            {/* {Checkout} */}
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calendar"
                  width={32}
                  height={32}
                />
                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">
                  <p>{event.start_date}</p>
                  <p>{event.end_date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={32}
                  height={32}
                />
                <Text size={16} weight="medium" className="lg:p-regular-20">
                  {event.location}
                </Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text
                  weight="bold"
                  size={16}
                  className="text-grey-500 lg:p-regular-18"
                >
                  {event.detail}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <Heading size="h2">Related Events</Heading>
      </section>
    </>
  );
};
export default EventDetails;
