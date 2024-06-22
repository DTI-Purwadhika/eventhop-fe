import { Dispatch, SetStateAction } from "react";

export type FileType = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};
