"use client";
import React, { useEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ReportChartCon,
  ReportCon,
  ReportTableCon,
} from "@/components/containers";
import { SearchType } from "@/shares/types/search";
import { useEvents } from "@/hooks/useEvent";
import { useTickets } from "@/hooks/useTicket";
import { getSession } from "@/services/auth/services/getSession";

const Report = () => {
  const [reportLength, setReportLength] = useState("all time");
  const [revenueCount, setRevenueCount] = useState(0);
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

  const events: SearchType = {
    filter: `&organizer.id=${userId}`,
    limit: 10,
    page: 1,
    category: "",
    sort: "early_date",
    status: "active",
  };

  const eventData = useEvents(events);

  const reports: SearchType = {
    filter: `&organizer_id=${userId}`,
    limit: 10,
    page: currentPage,
    category: "",
    sort: "newest",
  };

  const ticketData = useTickets(reports);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Report</CardTitle>
        <CardDescription>Analysis your report</CardDescription>
      </CardHeader>
      <CardContent>
        <ReportCon
          attendeeCount={ticketData.totalData}
          eventCount={eventData.totalData}
          reportLength={reportLength}
          revenueCount={revenueCount}
          ticketCount={ticketData.totalData}
          setReportLength={setReportLength}
        />
        <ReportChartCon />
        <ReportTableCon
          eventData={eventData.collectData}
          ticketData={ticketData.collectData}
          totalData={ticketData.totalData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CardContent>
    </Card>
  );
};

export default Report;
