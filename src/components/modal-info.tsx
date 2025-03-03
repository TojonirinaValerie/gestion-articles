"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { useState } from "react";

const DialogInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(
    typeof window !== "undefined"
      ? localStorage.getItem("undestand")
        ? false
        : true
      : true
  );

  const handleUnderstand = () => {
    setIsOpen(false);
    localStorage.setItem("undestand", "true");
  };
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ReadMe</AlertDialogTitle>
          <AlertDialogDescription>
            The API{" "}
            <Link
              href={"https://fakestoreapi.com/"}
              target="blank"
              className="text-chart-1"
            >
              fakestoreapi.com
            </Link>{" "}
            is used as the data source for this project, which means that
            adding, modifying, and deleting data are not saved.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleUnderstand}>
            I understand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogInfo;
