import { Image } from "@/components/elements";
import { Heading, Text } from "@/components/typhographies";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { SearchParamProps } from "@/shares/types";
import { restById as rest } from "@/services/restService";
import { toTitleCase } from "@/shares/libs/toTitleCase";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import PurchaseForm from "@/components/containers/PurchaseCon";

const EventPurchase = async ({ params: { id } }: SearchParamProps) => {
  const event = await rest(id, "GET", "events");
  return (
    <section className="grid grid-cols-1 md:mt-12 md:mx-4 lg:grid-cols-2 xl:m-28 2xl:max-w-7xl">
      <Breadcrumb className="ml-2 mb-2 md:hidden">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/events">Event List</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>EV-0{event.id}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Image
        // src={event.images[0]}
        src={event.main_image}
        alt="event image"
        width={1000}
        height={1000}
        className="h-full min-h-[200px] object-cover object-center rounded-xl"
      />

      <div className="flex w-full flex-col gap-4 pt-4 px-2 md:py-8 md:px-5 lg:px-10 lg:py-0">
        <Breadcrumb className="mb-2 hidden md:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/events">Event List</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>EV-0{event.id}</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Purchase Ticket</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Heading size="h3" weight="medium" className="text-3xl font-semibold">
          {event.name}
        </Heading>

        <div className="flex flex-col lg:justify-between lg:h-full">
          <div className="grid grid-cols-2 gap-y-2 mt-2 md:text-lg lg:text-xl">
            <div>
              <Label>Event Start</Label>
              <Text>
                {dateFormatter(event.start_date, "d MMM yyyy, HH:mm")}
              </Text>
            </div>
            <div>
              <Label>Event End</Label>
              <Text>{dateFormatter(event.end_date, "d MMM yyyy, HH:mm")}</Text>
            </div>
            <div>
              <Label>Location</Label>
              <Text size={16} weight="medium">
                {toTitleCase(event.location)}
              </Text>
            </div>
            <div>
              <Label>Category</Label>
              <Text size={14} weight="medium">
                {toTitleCase(event.category)}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-2 lg:hidden">
          <Text
            size={16}
            weight="regular"
            className="text-grey-500 my-2 lg:p-regular-18"
          >
            {event.detail}
          </Text>
        </div>
        <Text size={14} weight="medium">
          by{" "}
          <Text type="span" className="text-primary-500">
            {toTitleCase(event.organizer.name)}
          </Text>
        </Text>
      </div>
      <div className="md:col-span-2 mt-8">
        <Heading size="h3" weight="medium" className="text-3xl font-semibold">
          Purchase Information
        </Heading>
        <br />
        <PurchaseForm event={event} />
      </div>
    </section>
  );
};
export default EventPurchase;
