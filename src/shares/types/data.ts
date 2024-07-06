import { ColumnDef } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";

export type DataType = {
  data: any[];
  totalData: number;
  limit: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  type?: string;
  isSmall?: boolean;
};
