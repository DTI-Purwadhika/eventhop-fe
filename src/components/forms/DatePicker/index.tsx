"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/shares/libs/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../";
import { Label } from "@/components/ui/label";

const DatePicker = ({ text, onChange }: { text: string; onChange?: any }) => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Label>{text}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal p-0",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mx-2 h-4 w-4" />
            <Input
              placeholder={text}
              value={date ? format(date, "dd MMMM yyyy") : text}
              onChange={onChange}
              className="w-full rounded-l-none rounded-r-md"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
