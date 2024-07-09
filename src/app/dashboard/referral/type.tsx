"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type ReferralType = {
  name: number;
  created_at: string;
};

export const columns: ColumnDef<ReferralType>[] = [
  {
    accessorKey: "name",
    header: "Hopper Name",
  },
  {
    accessorKey: "created_at",
    header: "Joined Date",
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
