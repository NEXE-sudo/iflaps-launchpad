import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function TestInfoModal({
  isOpen,
  onClose,
  title,
  description,
}: TestInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="text-muted-foreground">{description}</div>
      </DialogContent>
    </Dialog>
  );
}
