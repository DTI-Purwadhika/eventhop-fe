"use client";
import { ReportCon, ReportTableCon } from "@/components/containers";
import { useEvents } from "@/hooks/useEvent";
import { useTickets } from "@/hooks/useTicket";
import { SearchType } from "@/shares/types/search";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Dashboard = () => {
  const [reportLength, setReportLength] = useState("all time");
  const [revenueCount, setRevenueCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: session } = useSession();

  const userId = session?.user?.id;

  const events: SearchType = {
    filter: "",
    limit: 10,
    page: 1,
    category: "",
    sort: "early_date",
    userId: userId,
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
export default Dashboard;
