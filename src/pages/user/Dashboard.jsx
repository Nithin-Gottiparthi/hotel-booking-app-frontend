import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getMyBookingsApi } from "../../api/bookings.api";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getMyBookingsApi();
        setBookings(res.data.bookings || []);
      } catch (e) {
        console.log("dashboard booking load failed");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "CONFIRMED").length;
    const pending = bookings.filter((b) => b.status === "PAYMENT_PENDING").length;
    const cancelled = bookings.filter((b) => b.status === "CANCELLED").length;

    return { total, confirmed, pending, cancelled };
  }, [bookings]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p className="text-gray-600 mt-1">Manage your bookings and explore hotels.</p>

      {loading ? (
        <div className="mt-6">Loading...</div>
      ) : (
        <>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <Card title="Total Bookings" value={stats.total} />
            <Card title="Confirmed" value={stats.confirmed} />
            <Card title="Payment Pending" value={stats.pending} />
            <Card title="Cancelled" value={stats.cancelled} />
          </div>

          {/* Quick actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-5">
              <h2 className="text-lg font-bold">Quick Actions</h2>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Link
                  to="/hotels"
                  className="px-4 py-2 bg-black text-white rounded-lg"
                >
                  Book a Hotel
                </Link>
                <Link
                  to="/my-bookings"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  View My Bookings
                </Link>
              </div>
            </div>

            <div className="bg-white border rounded-xl p-5">
              <h2 className="text-lg font-bold">Latest Booking</h2>
              {bookings[0] ? (
                <div className="mt-3 text-sm text-gray-700">
                  <div className="font-mono text-gray-500">
                    {bookings[0].bookingCode}
                  </div>
                  <div className="font-semibold">{bookings[0].hotelId?.name}</div>
                  <div className="text-gray-600">{bookings[0].roomId?.title}</div>
                  <div className="mt-2">
                    Status: <b>{bookings[0].status}</b>
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-gray-600">No bookings yet.</p>
              )}
            </div>
          </div>
        </>
      )}
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
