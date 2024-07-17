"use client";
import { DashboardCon, EventCon } from "@/components/containers";
import { getSession } from "@/services/auth/services/getSession";
import { useState, useEffect } from "react";
import Tickets from "./tickets/page";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  const userRole = session?.role;

  if (userRole !== "organizer") {
    return (
      <Card>
        <CardContent className="flex flex-col gap-4 px-8 py-6">
          <div>
            <h3 className="text-2xl font-medium ">Check Out this Event!</h3>
            <EventCon />
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return <DashboardCon />;
  }
};
export default Dashboard;
