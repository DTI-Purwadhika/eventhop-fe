"use client";
import { ReportCon, ReportTableCon } from "@/components/containers";
import { useState, useEffect } from "react";
import { getSession } from "@/services/auth/services/getSession";
import { SearchType } from "@/shares/types/search";
import { useTickets } from "@/hooks/useTicket";
import { useEvents } from "@/hooks/useEvent";

const DashboardCon = () => {
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
    sort: "early_date",
    status: "active",
  };

  const eventData = useEvents(events);

  const reports: SearchType = {
    filter: `&organizer_id=${userId}`,
    limit: 10,
    page: currentPage,
    sort: "newest",
  };

  const ticketData = useTickets(reports);

  return (
    <>
      <ReportCon
        eventCount={eventData.totalData}
        attendeeCount={ticketData.totalData}
        ticketCount={ticketData.totalData}
        revenueCount={revenueCount}
        setReportLength={setReportLength}
        reportLength={reportLength}
      />
      <ReportTableCon
        eventData={eventData.collectData}
        ticketData={ticketData.collectData}
        totalData={ticketData.totalData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default DashboardCon;
