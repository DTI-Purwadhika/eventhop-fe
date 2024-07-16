"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/forms";
import { useState } from "react";

const ReviewDialog = ({
  name,
  id,
  className,
}: {
  name: string;
  id: string;
  className?: string;
}) => {
  const [selectedStar, setSelectedStar] = useState<number | null>(3);

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={`${className} px-4 py-2 border rounded-xl`}
      >
        Add Review
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{name}</AlertDialogTitle>
          <div className="grid grid-cols-5 items-center mb-4 mx-auto md:ml-0 w-2/3 md:w-1/3">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`mr-1 cursor-pointer`}
                onClick={() => setSelectedStar(star)}
                onMouseEnter={() => setSelectedStar(star)}
              >
                {star <= selectedStar! ? "⭐️" : "☆"}
              </span>
            ))}
          </div>
          <AlertDialogDescription className="p-regular-16 text-grey-600">
            <Textarea label="Review" placeholder="Very Good" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {}}
            className="bg-primary-500 text-white hover:bg-primary-500/80 rounded-xl"
          >
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReviewDialog;
