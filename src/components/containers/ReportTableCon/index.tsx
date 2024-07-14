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
import { Pagination } from "@/components/layouts";

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
  totalData,
  currentPage = 1,
  setCurrentPage,
}: {
  eventData: any;
  ticketData: any;
  totalData: number;
  currentPage: number;
  setCurrentPage: any;
}) => {
  return (
    <div className="grid gap-4 xl:grid-cols-3">
      <Card className="xl:col-span-2 h-fit">
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
            currentPage={(currentPage - 1) * 10 + 1}
            noCrud={true}
          />
          <br />
          {totalData / 10 > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPosts={totalData}
              postsPerPage={10}
              setCurrentPage={setCurrentPage}
            />
          )}
        </CardContent>
      </Card>
      <Card className="h-fit">
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
