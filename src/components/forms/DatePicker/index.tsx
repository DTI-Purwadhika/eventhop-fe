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
  field,
  onChange,
  value,
  withTime = true,
  withPast = false,
  placeholder,
  label,
}: {
  text?: string;
  placeholder?: string;
  label?: string;
  onChange?: any;
  value?: Date;
  field?: ControllerRenderProps<any, any>;
  withTime?: boolean;
  withPast?: boolean;
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
      <Label>{label}</Label>
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
              placeholder={placeholder || "Select date"}
              value={
                value
                  ? format(value, withTime ? "d MMMM yyyy HH:mm" : "d/MM/yyyy")
                  : text
              }
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
            disabled={(date) => (withPast ? false : date < new Date())}
          />
          {withTime && (
            <TimePicker
              onChange={(e) => handleTimeChange(e)}
              value={value}
              format="HH:mm"
              disableClock={true}
            />
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DatePicker;
