"use client";
import { useEvents } from "@/hooks/useEvent";
import { useEffect, useState } from "react";
import { getSession } from "@/services/auth/services/getSession";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventCon } from "@/components/containers";
import { Heading } from "@/components/typhographies";
import { Separator } from "@/components/ui/separator";

const Tickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userId = session?.id;

  return (
    <Card>
      <CardContent className="flex flex-col gap-4 px-8 py-6">
        <div>
          <h3 className="text-2xl font-medium ">My Active Ticket</h3>
          <EventCon />
        </div>
        <Separator className="mb-4" />
        <div>
          <h3 className="text-2xl font-medium ">Unreviewed Event</h3>
          <EventCon />
        </div>
        <Separator className="mb-4" />
        <div>
          <h3 className="text-2xl font-medium ">Past Event</h3>
          <EventCon />
        </div>
      </CardContent>
    </Card>
  );
};

export default Tickets;
