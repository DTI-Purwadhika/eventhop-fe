"use client";
import { dateFormatter } from "@/shares/libs/dateFormatter";
import { ColumnDef } from "@tanstack/react-table";

export type VoucherType = {
  id: string;
  name: string;
  type: string;
  amount: number;
  event_name: string;
  quota: number;
  code: string;
  exp: string;
};

export const columns: ColumnDef<VoucherType>[] = [
  {
    accessorKey: "name",
    header: "Promo Name",
  },
  {
    accessorKey: "type",
    header: "Promo Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      let formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
      }).format(amount);

      if (row.getValue("type") === "Percentage") {
        formatted = `${row.getValue("amount")}%`;
      }

      return formatted;
    },
  },
  {
    accessorKey: "event_name",
    header: "Event Name",
  },
  {
    accessorKey: "quota",
    header: "Quota",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "expire_date",
    header: "Expire Date",
    cell: ({ row }) => (
      <>
        <div className="lg:hidden">
          {dateFormatter(row.getValue("expire_date"), "d/MM/yyyy")}
        </div>
        <div className="hidden lg:block">
          {dateFormatter(row.getValue("expire_date"))}
        </div>
      </>
    ),
  },
];
