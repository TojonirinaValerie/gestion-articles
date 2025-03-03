// React
import { useCallback, useState } from "react";

// Next
import Image from "next/image";

// Externe
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface UploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  setFile: (file: File) => void;
  defaultValue?: string;
  disabled?: boolean;
}
const ProductUploader: React.FC<UploaderProps> = ({
  className,
  setFile,
  defaultValue,
  disabled,
}) => {
  // State
  const [preview, setPreview] = useState<string | null>(
    defaultValue ? defaultValue : null
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  return (
    <div>
      <input disabled={disabled} {...getInputProps()} />
      <div
        {...getRootProps()}
        className={cn(
          "group relative grid h-[200px] w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25",
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isDragActive && "border-muted-foreground/50",
          className
        )}
      >
        {isDragActive ? (
          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed p-3">
              <Upload
                className="size-7 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <p className="font-medium text-muted-foreground">
              Drop the files here
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
            <div className="rounded-full border border-dashed p-3">
              <Upload
                className="size-7 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col gap-px">
              <p className="font-medium text-muted-foreground">
                Drag and drop files here, or click to select files
              </p>
            </div>
          </div>
        )}
      </div>
      {preview && (
        <div className="flex flex-col mt-2">
          <div className="relative flex items-center">
            <div className="flex-1">
              <Image
                src={preview}
                alt={preview}
                width={10000}
                height={10000}
                loading="lazy"
                className="aspect-square shrink-0 rounded-md object-cover w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductUploader;
