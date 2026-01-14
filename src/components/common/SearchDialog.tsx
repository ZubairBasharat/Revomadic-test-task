import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import SearchBar from "./Searchbar";
import { Button } from "../ui/button";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  placeholderText?: string;
}

export default function SearchDialog({
  open,
  onOpenChange,
  placeholderText,
}: SearchDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125">
        <DialogTitle className="text-lg font-bold">Search</DialogTitle>
        <div className="my-6">
          <SearchBar placeholderText={placeholderText} />
        </div>
        <Button>Submit</Button>
      </DialogContent>
    </Dialog>
  );
}
