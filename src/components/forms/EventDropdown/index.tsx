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
import { Label } from "@/components/ui/label";
import { getSession } from "@/services/auth/services/getSession";
import { useEvents } from "@/hooks/useEvent";

type DropdownProps = {
  value: string;
  setEvent?: any;
};

const EventDropdown = ({ value, setEvent }: DropdownProps) => {
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  const event: SearchType = {
    filter: `&organizer.id=${userId}`,
    sort: "newest",
    status: "active",
  };

  const { collectData } = useEvents(event);

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
          {collectData.length > 0 ? (
            collectData.map((item: any, index) => (
              <SelectItem key={item.id + index} value={item.id}>
                {item.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem value="no event" disabled>
              Load your event...
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </>
  );
};
export default EventDropdown;
