"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type AttendeeType = {
  id: string;
  event_name: string;
  attendee_name: string;
  created_at: string;
};

export const eventsList: AttendeeType[] = [
  {
    id: "1",
    event_name: "Tech Conference 2025",
    attendee_name: "Toto",
    created_at: "2024-08-14",
  },
  {
    id: "2",
    event_name: "Tech Conference 2025",
    attendee_name: "AnToto",
    created_at: "2024-08-13",
  },
  {
    id: "3",
    event_name: "Tech Conference 2025",
    attendee_name: "Totoni",
    created_at: "2024-08-16",
  },
  {
    id: "4",
    event_name: "Tech Conference 2025",
    attendee_name: "Torito",
    created_at: "2024-08-15",
  },
];

export const columns: ColumnDef<AttendeeType>[] = [
  {
    accessorKey: "event_name",
    header: "Event Name",
  },
  {
    accessorKey: "attendee_name",
    header: "Hopper Name",
  },
  {
    accessorKey: "created_at",
    header: "Purchase Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden">
          {dateFormatter(row.getValue("created_at"), "d/MM/yyyy")}
        </div>
        <div className="hidden lg:block">
          {dateFormatter(row.getValue("created_at"))}
        </div>
      </>
    ),
  },
];
