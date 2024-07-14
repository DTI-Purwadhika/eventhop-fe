"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type FeedbackType = {
  description: string;
  point: number;
  date: string;
  user_id: string;
};

export const columns: ColumnDef<FeedbackType>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "point",
    header: "Point",
  },
  {
    accessorKey: "date",
    header: "Received Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden">
          {dateFormatter(row.getValue("date"), "d/MMM/yyyy")}
        </div>
        <div className="hidden lg:block">
          {dateFormatter(row.getValue("date"))}
        </div>
      </>
    ),
  },
];
