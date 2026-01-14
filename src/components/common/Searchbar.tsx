import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  centerPlaceholder?: boolean;
  placeholderText?: string;
}

export default function SearchBar({
  centerPlaceholder = false,
  placeholderText = "Search here...",
}: SearchBarProps) {
  return (
    <div className="relative w-105">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        placeholder={placeholderText}
        className={`
          ${centerPlaceholder ? "text-center" : "text-left"}
          ${centerPlaceholder ? "focus:text-left" : ""}
          pl-7
          border-x-0 border-t-0 border-b
          border-gray-200
          rounded-none
          focus:rounded-sm
          focus:ring-0
          shadow-none
          bg-gray-50
          focus:shadow-none
        `}
      />
    </div>
  );
}
