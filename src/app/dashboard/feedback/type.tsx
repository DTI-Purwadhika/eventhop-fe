"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type FeedbackType = {
  id: string;
  event_name: number;
  user_name: string;
  rating: number;
  review: string;
  created_at: string;
};

export const columns: ColumnDef<FeedbackType>[] = [
  {
    accessorKey: "event_name",
    header: "Event Name",
  },
  {
    accessorKey: "user_name",
    header: "Hopper",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number;
      let star = "";
      for (let i = 0; i < rating; i++) {
        star += "⭐";
      }
      return star;
    },
  },
  {
    accessorKey: "review",
    header: "Review",
  },
  {
    accessorKey: "created_at",
    header: "Review Date",
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
