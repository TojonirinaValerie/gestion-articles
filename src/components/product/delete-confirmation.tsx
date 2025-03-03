import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import React from "react";
import Loading from "../shared/loading";

type DeleteConfirmationProps = {
  onDelete: () => void;
  isLoading?: boolean;
};

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onDelete,
  isLoading,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-1 ml-2" variant={"destructive"}>
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[425px] ${
          isLoading ? " [&>button]:hidden " : ""
        }  `}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Delete Product</DialogTitle>
              <DialogDescription>
                Voulez-vous vraiment supprimer cette produit?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="secondary" disabled={isLoading}>
                  Close
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant="destructive"
                onClick={onDelete}
                disabled={isLoading}
              >
                Delete
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmation;
