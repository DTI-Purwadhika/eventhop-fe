"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type EventType = {
  id: string;
  name: string;
  category: string;
  location: string;
  startDate: string;
  price: number;
};

export const columns: ColumnDef<EventType>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      if (row.getValue("price") === 0) {
        return "FREE";
      }
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      }).format(price);

      return formatted;
    },
  },
  {
    accessorKey: "start_date",
    header: "Event Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden">
          {dateFormatter(row.getValue("start_date"), "d/MM/yyyy")}
        </div>
        <div className="hidden lg:block">
          {dateFormatter(row.getValue("start_date"))}
        </div>
      </>
    ),
  },

  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
];
