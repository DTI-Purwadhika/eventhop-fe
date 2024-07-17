"use client";
import { useEffect, useState } from "react";
import { getSession } from "@/services/auth/services/getSession";
import { Card, CardContent } from "@/components/ui/card";
import { EventCon } from "@/components/containers";
import { Separator } from "@/components/ui/separator";
import ReviewCon from "@/components/containers/ReviewCon";

const Tickets = () => {
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
        <ReviewCon
          title={"Unreviewed Event"}
          isReviewed={false}
          owner="user"
          userId={userId}
        />
        <Separator className="mb-4" />
        <ReviewCon
          title={"Past Event"}
          isReviewed={true}
          owner="user"
          userId={userId}
        />
      </CardContent>
    </Card>
  );
};

export default Tickets;
