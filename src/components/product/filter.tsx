// UI
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { capitalize } from "@/lib/utils";
import { useAppStore } from "@/store";

type FilterProps = {
  listCategory: string[];
};

const Filter: React.FC<FilterProps> = ({ listCategory }) => {
  const { searchValue, category, setSearchValue, setCategory } = useAppStore();

  return (
    <div className="w-full flex flex-row justify-between">
      <div>
        <div className="relative">
          <Input
            placeholder="Search... "
            className="pl-8"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </div>
      </div>
      <div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="all category">All Category</SelectItem>
              {listCategory.map((category, index) => (
                <SelectItem
                  key={`filter-${category}-${index}`}
                  value={category}
                >
                  {capitalize(category)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
