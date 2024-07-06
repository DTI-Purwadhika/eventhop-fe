import { ColumnDef } from "@tanstack/react-table";

export type CollectionType = {
  limit: number;
  column?: ColumnDef<any>[];
  type?: string;
  isSmall?: boolean;
  collection?: "card" | "table";
};
