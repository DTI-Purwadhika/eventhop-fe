"use client";

import { useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/forms";
import { convertFileToUrl } from "@/libs/utils";
import { FileType } from "./type";
import { Image } from "@/components/elements";
import { Text } from "@/components/typhographies";

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
    <Image
      src="/assets/icons/upload.svg"
      width={77}
      height={77}
      alt="file upload"
    />
    <h3 className="mb-2 mt-2">Drag photo here</h3>
    <Text size={12} weight="medium">
      SVG, PNG, JPG
    </Text>
    <Button>Select from computer</Button>
  </div>
);

function FileUploader({ imageUrl, onFieldChange, setFiles }: FileType) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {imageUrl ? <UploadedImg imageUrl={imageUrl} /> : <DropZone />}
    </div>
  );
}

export default FileUploader;
