import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import AddClientForm from "./AddClientForm";

const AddClientDialog = ({ open, onOpenChange,fetchClients }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Create a new client record for your practice.
          </DialogDescription>
        </DialogHeader>

        <AddClientForm onCancel={() => onOpenChange(false)} fetchClients={fetchClients} />
      </DialogContent>
    </Dialog>
  );
};

export default AddClientDialog;
