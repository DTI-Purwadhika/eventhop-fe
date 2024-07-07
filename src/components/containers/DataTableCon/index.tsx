import { Button } from "@/components/forms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DataTable } from "@/components/elements/Table";
import { DataTableType } from "./type";
import { Pagination } from "@/components/layouts";
import { DataType } from "@/shares/types/data";

const TabMenu = () => (
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="active">Active</TabsTrigger>
    <TabsTrigger value="past">Past</TabsTrigger>
  </TabsList>
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
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{`Manage all of your ${title} in one place`}</CardDescription>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="all">
        <div className="flex justify-between mb-4">
          <TabMenu />
          <Button
            url={`/dashboard/${title.toLowerCase()}/new`}
            icon="Plus"
            className={noCrud ? "hidden" : ""}
            disabled={noCrud}
          >
            {`${title === "Events" ? "Host" : "Add"} a new ${title}`}
          </Button>
        </div>
        <TabsContent value="all" className="w-full overflow-x-auto">
          <DataTable
            columns={columns}
            data={data}
            currentPage={(currentPage - 1) * limit + 1}
            noCrud={noCrud}
          />
        </TabsContent>
        <br />
        {totalData / limit > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPosts={totalData}
            postsPerPage={limit}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Tabs>
    </CardContent>
  </Card>
);
export default DataTableCon;
