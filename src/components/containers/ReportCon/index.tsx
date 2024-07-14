"use client";
import { Card } from "@/components/elements";
import { useState } from "react";
import { ReportConType } from "./type";

const ReportCon = ({
  eventCount,
  attendeeCount,
  ticketCount,
  revenueCount,
  setReportLength,
  reportLength,
}: ReportConType) => {
  const handleReportLengthChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setReportLength(event.target.value);
  };

  return (
    <>
      <div className="border rounded-lg px-4 py-2 mb-1">
        <select
          value={reportLength}
          onChange={handleReportLengthChange}
          className="w-full"
        >
          <option value="today">Today</option>
          <option value="this week">This Week</option>
          <option value="this month">This Month</option>
          <option value="this year">This Year</option>
          <option value="all time">All Time</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Your Event"
          icon="PartyPopper"
          result={eventCount.toString() + " Event"}
          description={`Your ${reportLength} event`}
        />
        <Card
          title="The Hopper"
          icon="UsersRound"
          result={attendeeCount.toString() + " Attendee"}
          description={`Your ${reportLength} attendee to your event`}
        />
        <Card
          title="Ticket Sold"
          icon="TicketCheck"
          result={ticketCount.toString() + " Ticket"}
          description={`Your ${reportLength} ticket sold`}
        />
        <Card
          title="Revenue"
          icon="LineChart"
          result={revenueCount.toString() + " Revenue"}
          description={`Your ${reportLength} revenue`}
        />
      </div>
    </>
  );
};
export default ReportCon;
