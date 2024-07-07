"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/forms";
import Icon from "@/shares/assets/Icon";

interface DataTableType<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  currentPage: number;
  noCrud?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  currentPage = 1,
  noCrud,
}: DataTableType<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Table className="rounded-md border">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            <TableHead key={headerGroup.id} className="hidden md:table-cell">
              No.
            </TableHead>
            {headerGroup.headers.map((header, index) => (
              <TableHead
                key={header.id}
                className={
                  index === 3 || index === 4
                    ? "hidden lg:table-cell"
                    : index === 1
                      ? "hidden md:table-cell"
                      : ""
                }
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
            <TableHead
              key={headerGroup.id + "-action"}
              className={noCrud ? "hidden" : ""}
            >
              Action
            </TableHead>
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              <TableCell key={row.id} className="hidden md:table-cell">
                {row.index + currentPage}
              </TableCell>
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  key={cell.id}
                  className={
                    index === 3 || index === 4
                      ? "hidden lg:table-cell"
                      : index === 1
                        ? "hidden md:table-cell"
                        : ""
                  }
                >
                  <div className={`line-clamp-3 md:line-clamp-2`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </TableCell>
              ))}
              <TableCell
                key={`${row.id}-actions`}
                className={noCrud ? "hidden" : ""}
              >
                <div className="flex flex-col md:flex-row items-end gap-1">
                  <Button icon="Pencil" iconOnly="sm" size="sm">
                    Edit
                  </Button>
                  <Button
                    icon="Trash"
                    iconOnly="md"
                    size="sm"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
