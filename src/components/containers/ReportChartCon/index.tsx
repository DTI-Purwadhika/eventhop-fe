"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

type DataPoint = {
  name: string;
  revenue?: number;
  attendees?: number;
  score?: string;
};
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF4"];

const ReportChart = () => {
  const dataRevenue: DataPoint[] = [
    { name: "Event A", revenue: 4000 },
    { name: "Event B", revenue: 3000 },
    { name: "Event C", revenue: 2000 },
    { name: "Event D", revenue: 2780 },
    { name: "Event E", revenue: 1890 },
    { name: "Event F", revenue: 2390 },
    { name: "Event G", revenue: 3490 },
  ];

  const dataAttendees: DataPoint[] = [
    { name: "Event A", attendees: 400 },
    { name: "Event B", attendees: 300 },
    { name: "Event C", attendees: 200 },
    { name: "Event D", attendees: 278 },
    { name: "Event E", attendees: 189 },
    { name: "Event F", attendees: 239 },
    { name: "Event G", attendees: 349 },
  ];

  const dataReviews: DataPoint[] = [
    { name: "1*", attendees: 23 },
    { name: "2*", attendees: 30 },
    { name: "3*", attendees: 33 },
    { name: "4*", attendees: 40 },
    { name: "5*", attendees: 60 },
  ];
  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Events Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Attendee Events</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataAttendees}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendees" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="card bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">
          Average Review Score per Event
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataReviews}
              dataKey="attendees"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {dataReviews.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default ReportChart;
