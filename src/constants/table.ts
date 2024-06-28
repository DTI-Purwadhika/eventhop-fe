"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "startDateTime",
    header: "Start Date",
  },
  {
    accessorKey: "category.name",
    header: "Category",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "organizer",
    header: "Organizer",
  },
];
