import { ColumnDef } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

export type CollectionType = {
  limit: number;
  column?: ColumnDef<any>[];
  type?: string;
  isSmall?: boolean;
  title?: string;
  data: any;
  totalData: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  noCrud?: boolean;
};
