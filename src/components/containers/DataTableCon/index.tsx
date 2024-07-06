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
  description,
  totalData,
  limit,
  currentPage,
  setCurrentPage,
}: DataTableType & DataType) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="all">
        <div className="flex justify-between mb-4">
          <TabMenu />
          <Button url="/dashboard/events/new" icon="Plus">
            Host a new Event
          </Button>
        </div>
        <TabsContent value="all">
          <DataTable
            columns={columns}
            data={data}
            currentPage={(currentPage - 1) * limit + 1}
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
