"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type FeedbackType = {
  id: string;
  event_name: string;
  event_type_name: string;
  created_at: string;
};

export const columns: ColumnDef<FeedbackType>[] = [
  {
    accessorKey: "event_name",
    header: "Event Name",
  },
  {
    accessorKey: "event_type_name",
    header: "Ticket Tier",
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
