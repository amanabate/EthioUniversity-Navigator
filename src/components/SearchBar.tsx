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
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search universities by name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 h-12 rounded-full border-2 focus-visible:ring-primary"
          />
        </div>
        
        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className="md:w-48 h-12 rounded-full border-2">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Public">Public</SelectItem>
            <SelectItem value="Private">Private</SelectItem>
          </SelectContent>
        </Select>

        <Select value={locationFilter} onValueChange={onLocationChange}>
          <SelectTrigger className="md:w-48 h-12 rounded-full border-2">
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
