import { ColumnDef } from "@tanstack/react-table";

export type DataTableType = {
  columns: ColumnDef<any>[];
  data: any;
  title: string;
  noCrud?: boolean;
  filterData?: {
    startPrice: number | undefined;
    endPrice: number | undefined;
    setStartPrice: (value: number | undefined) => void;
    setEndPrice: (value: number | undefined) => void;
    setStartDate: (value: Date) => void;
    setEndDate: (value: Date) => void;
    isFree: boolean;
    setIsFree: (value: boolean) => void;
    handleSubmit: () => void;
    setCategory: (value: string) => void;
    category: string;
  };
};
