"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type ActiveType = {
  name: string;
  location: string;
  date: string;
};

export type ReportType = {
  id: string;
  user_name: string;
  event_name: string;
  created_at: string;
};

export const columns: ColumnDef<ReportType>[] = [
  {
    accessorKey: "user_name",
    header: "Hopper Name",
  },
  {
    accessorKey: "event_name",
    header: "Event Name",
  },
  {
    accessorKey: "created_at",
    header: "Purchase Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden">
          {dateFormatter(row.getValue("created_at"), "d MMM yyyy")}
        </div>
        <div className="hidden lg:block">
          {dateFormatter(row.getValue("created_at"))}
        </div>
      </>
    ),
  },
];
