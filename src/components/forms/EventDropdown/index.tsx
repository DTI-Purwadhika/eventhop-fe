"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { SearchType } from "@/shares/types/search";
import { useEvents } from "@/hooks/useEvent";
import { useSession } from "next-auth/react";
import getEvents from "@/services/event";
import { Label } from "@/components/ui/label";

type DropdownProps = {
  value: string;
  setEvent?: any;
};

const EventDropdown = ({ value, setEvent }: DropdownProps) => {
  const [events, setEvents] = useState<any[]>([]);
  const { data: session } = useSession();
  const loggedUser = session?.user?.id;

  useEffect(() => {
    const event: SearchType = {
      sort: "newest",
      status: "active",
      userId: loggedUser,
    };
    const fetchTheEvent = async () => {
      const events = await getEvents(event);
      if (events) {
        setEvents(events.data);
      }
    };

    fetchTheEvent();
  }, [loggedUser]);

  const onChangeHandler = (value: string) => {
    setEvent(value);
  };

  return (
    <>
      <Label>Event</Label>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="What event..?" />
        </SelectTrigger>
        <SelectContent className="max-h-[40vh]">
          {events.length > 0 &&
            events.map((item, index) => (
              <SelectItem key={item.id + index} value={item.name.toLowerCase()}>
                {item.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
};
export default EventDropdown;
