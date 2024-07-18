"use client";
import { Button } from "@/components/forms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/elements/Table";
import { DataTableType } from "./type";
import { Pagination } from "@/components/layouts";
import { DataType } from "@/shares/types/data";
import { FilterButton } from "@/components/navigations";
import FilterContent from "@/components/navigations/FilterContent";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TabMenu = () => <></>;

const DataTableCon = ({
  columns,
  data,
  title,
  totalData,
  limit,
  currentPage,
  setCurrentPage,
  noCrud,
  filterData,
}: DataTableType & DataType) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render skeleton loaders while loading
    return (
      <Card>
        <CardHeader className="mb-1">
          <CardTitle>
            <div className="flex justify-between relative">
              <Skeleton className="h-6 w-48" />
              <div className="absolute flex right-0 gap-3">
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </CardTitle>
          <CardDescription className="w-1/2 md:w-full">
            <Skeleton className="h-4 w-full" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          {[...Array(limit)].map((_, index) => (
            <Skeleton key={index} className="h-8 w-full mb-2" />
          ))}
          <br />
          <Skeleton className="h-10 w-48" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="mb-1">
        <CardTitle>
          <div className="flex justify-between relative">
            {title}
            {/* <TabMenu /> */}
            <div className="absolute flex right-0 gap-3">
              {/* <FilterButton>
                <FilterContent
                  startPrice={filterData.startPrice}
                  endPrice={filterData.endPrice}
                  setStartPrice={filterData.startPrice}
                  setEndPrice={filterData.endPrice}
                  setStartDate={filterData.setStartDate}
                  setEndDate={filterData.setEndDate}
                  isFree={filterData.isFree}
                  setIsFree={filterData.setIsFree}
                  handleSubmit={filterData.handleSubmit}
                  setCategory={filterData.setCategory}
                  category=""
                />
              </FilterButton> */}
              <Button
                url={`/dashboard/${title.toLowerCase()}/new`}
                icon="Plus"
                className={noCrud ? "hidden" : ""}
                disabled={noCrud}
                iconOnly="sm"
              >
                {`${title === "Events" ? "Host" : "Add"} a new ${title}`}
              </Button>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="w-1/2 md:w-full">
          {`Manage all of your ${title} in one place`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          currentPage={(currentPage - 1) * limit + 1}
          noCrud={noCrud}
        />
        <br />
        {totalData / limit > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPosts={totalData}
            postsPerPage={limit}
            setCurrentPage={setCurrentPage}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default DataTableCon;
