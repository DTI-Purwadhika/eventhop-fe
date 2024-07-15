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
import { getSession } from "@/services/auth/services/getSession";

type DropdownProps = {
  value: string;
  setEvent?: any;
};

const EventDropdown = ({ value, setEvent }: DropdownProps) => {
  const [events, setEvents] = useState<any[]>([]);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  useEffect(() => {
    const event: SearchType = {
      filter: `&organizer.id=${userId}`,
      sort: "newest",
      status: "active",
    };

    const fetchTheEvent = async () => {
      const events = await getEvents(event);
      if (events) {
        setEvents(events.data);
      }
    };

    fetchTheEvent();
  }, [userId]);

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
