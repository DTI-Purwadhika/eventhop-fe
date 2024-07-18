"use client";
import { Alert } from "@/components/elements";
import { Button } from "@/components/forms";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { toTitleCase } from "@/shares/libs/toTitleCase";
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
  // {
  //   accessorKey: "price",
  //   header: "Price",
  //   cell: ({ row }) => {
  //     if (row.getValue("price") === 0) {
  //       return "FREE";
  //     }
  //     const price = parseFloat(row.getValue("price"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "IDR",
  //     }).format(price);

  //     return formatted;
  //   },
  // },
  {
    accessorKey: "start_date",
    header: "Event Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden text-nowrap">
          {dateFormatter(row.getValue("start_date"), "d/MM/yyyy")}
        </div>
        <div className="hidden lg:block text-nowrap">
          {dateFormatter(row.getValue("start_date"))}
        </div>
      </>
    ),
  },

  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => toTitleCase(row.getValue("category")),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => toTitleCase(row.getValue("location")),
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex flex-col md:flex-row items-end gap-1">
        <Button
          url={`/dashboard/events/${row.getValue("id")}/update`}
          icon="Pencil"
          size="sm"
          iconOnly="md"
        >
          Edit
        </Button>
        <Alert
          type="event"
          id={row.getValue("id")}
          name={row.getValue("name")}
        />
      </div>
    ),
  },
];
