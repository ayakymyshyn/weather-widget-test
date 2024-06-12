import { useState } from "react";
import { useCountries } from "use-react-countries";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CitySelectorProps {
  onSelect: (city: string) => void;
  value: string;
}

export const CitySelector = ({ onSelect, value }: CitySelectorProps) => {
  const [open, setOpen] = useState(false);
  const { countries } = useCountries();

  const capitals = countries.map((country) => ({
    value: country.capital,
    label: `${country.capital}, ${country.name}`,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? capitals.find((capital) => capital.value === value)?.label
            : "Select city..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {capitals.map((capital) => (
                <CommandItem
                  key={capital.value}
                  value={capital.value}
                  onSelect={(currentValue) => {
                    onSelect(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === capital.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {capital.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
