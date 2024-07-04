import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Feedback = () => {
  return (
    <div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>
            What The Hoppers say about your page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hopper</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Event Name</TableHead>
                <TableHead>Review Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell>⭐⭐⭐⭐⭐</TableCell>
                <TableCell>
                  Great event! Very informative and well-organized.
                </TableCell>
                <TableCell>Tech Conference 2024</TableCell>
                <TableCell>2024-08-16</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Jane Smith</TableCell>
                <TableCell>⭐⭐⭐⭐</TableCell>
                <TableCell>Had a lot of fun! The bands were amazing.</TableCell>
                <TableCell>Music Festival</TableCell>
                <TableCell>2024-09-11</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alice Johnson</TableCell>
                <TableCell>⭐⭐⭐⭐⭐</TableCell>
                <TableCell>Loved the artwork! Very inspiring.</TableCell>
                <TableCell>Art Expo 2024</TableCell>
                <TableCell>2024-10-21</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Brown</TableCell>
                <TableCell>⭐⭐⭐</TableCell>
                <TableCell>It was okay. Some sessions were too long.</TableCell>
                <TableCell>Business Summit</TableCell>
                <TableCell>2024-11-06</TableCell>
              </TableRow>
              {/* Add more review rows as needed */}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-4</strong> of <strong>4</strong> reviews
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Feedback;
