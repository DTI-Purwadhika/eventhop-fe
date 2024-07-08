"use client";

import { useCallback } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { convertFileToUrl } from "@/shares/libs/utils";
import { useDropzone } from "@uploadthing/react/hooks";
import { FileType } from "./type";
import { Button } from "@/components/forms";
import { Image } from "@/components/elements";
import Icon from "@/shares/assets/Icon";

const UploadedImg = ({ imageUrl }: { imageUrl: string }) => (
  <div className="flex h-full w-full flex-1 justify-center ">
    <Image
      src={imageUrl}
      alt="image"
      width={250}
      height={250}
      className="w-full object-cover object-center"
    />
  </div>
);

const DropZone = () => (
  <div className="flex-center flex-col py-5 text-grey-500">
    <Icon name="Upload" />
    <Button className="mt-8">Select from computer</Button>
  </div>
);

const FileUploader = ({ imageUrl, onFieldChange, setFiles }: FileType) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      onFieldChange(convertFileToUrl(acceptedFiles[0]));
    },
    [onFieldChange, setFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-slate-50 border-2 border-slate-300 transition-colors hover:border-slate-500 hover:border-dashed hover:bg-slate-200"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {imageUrl ? <UploadedImg imageUrl={imageUrl} /> : <DropZone />}
    </div>
  );
};

export default FileUploader;
