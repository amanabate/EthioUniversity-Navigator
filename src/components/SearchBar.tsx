import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeChange: (value: string) => void;
  locationFilter: string;
  onLocationChange: (value: string) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  typeFilter,
  onTypeChange,
  locationFilter,
  onLocationChange,
}: SearchBarProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 p-2 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-card">
        {/* Search input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Search universities by name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-10 rounded-xl border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-background transition-colors"
          />
        </div>

        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className="md:w-40 h-10 rounded-xl border-0 bg-muted/50 focus:ring-1 focus:ring-primary">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Public">Public</SelectItem>
            <SelectItem value="Private">Private</SelectItem>
          </SelectContent>
        </Select>

        <Select value={locationFilter} onValueChange={onLocationChange}>
          <SelectTrigger className="md:w-44 h-10 rounded-xl border-0 bg-muted/50 focus:ring-1 focus:ring-primary">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Addis Ababa">Addis Ababa</SelectItem>
            <SelectItem value="Bahir Dar">Bahir Dar</SelectItem>
            <SelectItem value="Mekelle">Mekelle</SelectItem>
            <SelectItem value="Hawassa">Hawassa</SelectItem>
            <SelectItem value="Jimma">Jimma</SelectItem>
            <SelectItem value="Gondar">Gondar</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
