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

const ReviewDialog = ({
  name,
  id,
  className,
}: {
  name: string;
  id: string;
  className?: string;
}) => {
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
