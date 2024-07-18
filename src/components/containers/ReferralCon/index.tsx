import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DataTableType } from "./type";
import { Pagination } from "@/components/layouts";
import { DataTable } from "@/components/elements/Table";
import { DataType } from "@/shares/types/data";
import { toast } from "sonner";
import Icon from "@/shares/assets/Icon";

const ReferralCon = ({
  title,
  columns,
  data,
  totalData,
  limit,
  refCode = " ",
  currentPage,
  setCurrentPage,
}: DataTableType & DataType & { refCode: string }) => {
  const handleCopy = () =>
    toast("Your Code Copied!", {
      description: `${refCode} Copied! Invite your friend!`,
      className: "text-foreground bg-card border",
      action: {
        label: "Ok",
        onClick: () => {},
      },
    });
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Card className="w-full md:w-1/2 xl:w-1/3 mx-auto mt-6 mb-4 md:my-6 xl:mt-14 xl:mb-10">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              Invite a new Hopper and get reward for you and your friend!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="text-black text-3xl px-6 py-2 w-full transition-all bg-slate-200 rounded-2xl flex justify-between border border-slate-300 hover:border-slate-600 hover:border-dashed hover:bg-slate-300 hover:cursor-pointer"
              onClick={handleCopy}
            >
              {refCode}
              <Icon name="Clipboard" className="item-center mt-2" />
            </div>
          </CardContent>
        </Card>
        <CardTitle>Your Hopper Friend!</CardTitle>
        <CardDescription>Your friend use your code!</CardDescription>
        <DataTable
          columns={columns}
          data={data}
          currentPage={(currentPage - 1) * limit + 1}
          noCrud
        />
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
export default ReferralCon;
