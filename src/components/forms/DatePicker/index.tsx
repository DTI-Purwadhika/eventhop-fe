"use client";

import { useEffect, useState } from "react";
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
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./style.css";
import { ControllerRenderProps } from "react-hook-form";

const DatePicker = ({
  text,
  withTime,
  field,
  onChange,
  value,
}: {
  text: string;
  onChange?: any;
  withTime?: boolean;
  value?: Date;
  field?: ControllerRenderProps<any, any>;
}) => {
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [selectedDate, setSelectedDate] = useState<Date>();

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time || "");
  };

  useEffect(() => {
    if (selectedTime || selectedDate) {
      const [hours, minutes] = selectedTime.split(":");
      const newDate = new Date(selectedDate || new Date());
      newDate.setHours(parseInt(hours));
      newDate.setMinutes(parseInt(minutes));
      onChange(newDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, selectedTime]);

  return (
    <>
      <Label>{text}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal p-0",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mx-2 h-4 w-4" />
            <Input
              placeholder={text}
              value={value ? format(value, "dd MMMM yyyy HH:mm") : text}
              onChange={onChange}
              className="w-full rounded-l-none rounded-r-md"
              {...field}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            onSelect={setSelectedDate}
            initialFocus
            disabled={(date) => date < new Date()}
          />
          <TimePicker
            onChange={(e) => handleTimeChange(e)}
            value={value}
            format="HH:mm"
            disableClock={true}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
