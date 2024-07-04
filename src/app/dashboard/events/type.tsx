"use client";
import { Button } from "@/components/ui/button";
import { dateOnly } from "@/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type EventType = {
  id: number;
  name: string;
  category: string;
  location: string;
  startDate: string;
  price: number;
};

export const eventsList: EventType[] = [
  {
    id: 1,
    name: "Tech Conference 2025",
    category: "Technology",
    startDate: "2024-08-15",
    location: "Jakarta",
    price: 0,
  },
  {
    id: 2,
    name: "Music Festival",
    category: "Music",
    startDate: "2024-10-25",
    location: "Jakarta",
    price: 100000,
  },
  {
    id: 3,
    name: "Art Expo 2024",
    category: "Art",
    startDate: "2024-09-15",
    location: "Bali",
    price: 80000,
  },
  {
    id: 4,
    name: "Business Summit",
    category: "Business",
    startDate: "2024-09-10",
    location: "Bandung",
    price: 0,
  },
];

export const columns: ColumnDef<EventType>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
  },
  {
    accessorKey: "category",
    header: "Category",
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
    accessorKey: "startDate",
    header: "Event Date",
    cell: ({ row }) => dateOnly(row.getValue("startDate")),
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </div>
    ),
  },
];
