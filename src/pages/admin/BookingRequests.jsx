import { useEffect, useMemo, useState } from "react";
import { getAdminBookingsApi } from "../../api/admin.api";

export default function BookingRequests() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const loadBookings = async () => {
    try {
      setLoading(true);
      setErr("");

      const res = await getAdminBookingsApi();
      setBookings(res.data.bookings || []);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const filtered = useMemo(() => {
    let data = [...bookings];

    if (statusFilter !== "ALL") {
      data = data.filter((b) => b.status === statusFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((b) => {
        const code = b.bookingCode?.toLowerCase() || "";
        const hotel = b.hotelId?.name?.toLowerCase() || "";
        const user = b.userId?.email?.toLowerCase() || "";
        return code.includes(q) || hotel.includes(q) || user.includes(q);
      });
    }

    return data;
  }, [bookings, statusFilter, search]);

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <h1 className="text-2xl font-bold">Booking Requests</h1>

        <button
          onClick={loadBookings}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        >
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white border rounded-xl p-4 mb-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          className="border rounded-lg p-2"
          placeholder="Search bookingCode / hotel / user email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg p-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="ALL">All Status</option>
          <option value="PAYMENT_PENDING">PAYMENT_PENDING</option>
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>

        <div className="text-sm text-gray-600 flex items-center">
          Total: <span className="font-semibold ml-1">{filtered.length}</span>
        </div>
      </div>

      {loading && <div>Loading bookings...</div>}
      {err && <div className="text-red-600">{err}</div>}

      {!loading && !err && filtered.length === 0 && (
        <div className="bg-white border rounded-lg p-4">No bookings found.</div>
      )}

      {!loading && filtered.length > 0 && (
        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Booking Code</th>
                  <th className="p-3">User</th>
                  <th className="p-3">Hotel</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Dates</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((b) => (
                  <tr key={b._id} className="border-t">
                    <td className="p-3 font-mono">{b.bookingCode}</td>
                    <td className="p-3">
                      <div className="font-medium">{b.userId?.name}</div>
                      <div className="text-gray-600">{b.userId?.email}</div>
                    </td>
                    <td className="p-3">{b.hotelId?.name}</td>
                    <td className="p-3">
                      {b.roomId?.title}{" "}
                      <span className="text-gray-500">({b.roomId?.roomType})</span>
                    </td>
                    <td className="p-3">
                      <div className="text-gray-700">
                        {new Date(b.checkIn).toLocaleDateString()} →{" "}
                        {new Date(b.checkOut).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-3 font-semibold">₹{b.totalPrice}</td>
                    <td className="p-3">
                      <StatusBadge status={b.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const cls =
    status === "CONFIRMED"
      ? "bg-green-100 text-green-700"
      : status === "PAYMENT_PENDING"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-700";

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${cls}`}>
      {status}
    </span>
  );
}
