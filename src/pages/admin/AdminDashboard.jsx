import { useEffect, useState } from "react";
import { getAdminDashboardApi } from "../../api/admin.api";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [chart, setChart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr("");

        const res = await getAdminDashboardApi();
        setStats(res.data.stats);
        setChart(res.data.charts.bookingsLast7Days || []);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (err) return <div className="text-red-600">{err}</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Hotels" value={stats.totalHotels} />
        <Card title="Total Rooms" value={stats.totalRooms} />
        <Card title="Total Bookings" value={stats.totalBookings} />
        <Card title="Revenue" value={`₹${stats.totalRevenue}`} />
      </div>

      {/* Status Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Card title="Confirmed" value={stats.confirmedBookings} />
        <Card title="Payment Pending" value={stats.paymentPendingBookings} />
        <Card title="Cancelled" value={stats.cancelledBookings} />
      </div>

      {/* Simple Chart */}
      <div className="mt-8 bg-white border rounded-xl p-5">
        <h2 className="text-lg font-semibold mb-4">Bookings Last 7 Days</h2>

        <div className="space-y-2">
          {chart.map((d) => (
            <div key={d.date} className="flex items-center gap-4">
              <div className="w-28 text-sm text-gray-600">{d.date}</div>
              <div className="flex-1 bg-gray-100 rounded h-3 overflow-hidden">
                <div
                  className="bg-black h-3"
                  style={{ width: `${Math.min(d.bookings * 20, 100)}%` }}
                />
              </div>
              <div className="w-10 text-sm font-semibold">{d.bookings}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
