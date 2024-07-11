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

const TabMenu = () => (
  // <TabsList>
  //   <TabsTrigger value="all">All</TabsTrigger>
  //   <TabsTrigger value="active">Active</TabsTrigger>
  //   <TabsTrigger value="past">Past</TabsTrigger>
  // </TabsList>
  // dropdown
  <></>
);

const DataTableCon = ({
  columns,
  data,
  title,
  totalData,
  limit,
  currentPage,
  setCurrentPage,
  noCrud,
}: DataTableType & DataType) => (
  <Card>
    <CardHeader className="mb-1">
      <CardTitle>
        <div className="flex justify-between relative">
          {title}
          {/* <TabMenu /> */}
          <div className="absolute flex right-0 gap-3">
            <FilterButton>
              <FilterContent />
            </FilterButton>
            <Button
              url={`/dashboard/${title.toLowerCase()}/new`}
              icon="Plus"
              className={noCrud ? "hidden" : ""}
              disabled={noCrud}
            >
              {`${title === "Events" ? "Host" : "Add"} a new ${title}`}
            </Button>
          </div>
        </div>
      </CardTitle>
      <CardDescription>{`Manage all of your ${title} in one place`}</CardDescription>
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
export default DataTableCon;
