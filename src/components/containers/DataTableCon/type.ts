import { ColumnDef } from "@tanstack/react-table";

export type DataTableType = {
  columns: ColumnDef<any>[];
  data: any;
  title: string;
  noCrud?: boolean;
};
