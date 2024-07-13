import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DataTable } from "@/components/elements/Table";
import { ActiveType, columns } from "./type";
import { dateFormatter } from "@/shares/libs/dateFormatter";

const ActiveEvent = ({ name, location, date }: ActiveType) => (
  <div className="flex items-center gap-4">
    <div className="grid gap-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">
        {location} - {date}
      </p>
    </div>
  </div>
);

const ActiveEventTable = ({ eventData }: { eventData: any }) => {
  if (eventData.length === 0) {
    return (
      <div className="flex items-center gap-4">
        <div className="grid gap-1">There is no Active Event</div>
      </div>
    );
  }

  return eventData.map((event: any, index: number) => (
    <ActiveEvent
      key={index + event.name + event.start_date}
      name={event.name}
      location={event.location}
      date={dateFormatter(event.start_date)!}
    />
  ));
};

const ReportTable = ({
  eventData,
  ticketData,
}: {
  eventData: any;
  ticketData: any;
}) => {
  return (
    <div className="grid gap-4 md:gap-8 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Ticket Purchase</CardTitle>
            <CardDescription>Recent buy from the Hopper</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={ticketData}
            currentPage={1}
            noCrud={true}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Active Event</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
          <ActiveEventTable eventData={eventData} />
        </CardContent>
      </Card>
    </div>
  );
};
export default ReportTable;
