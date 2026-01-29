import { useEffect, useState } from "react";
import { cancelBookingApi, getMyBookingsApi } from "../../api/bookings.api";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setMsg("");

      const res = await getMyBookingsApi();
      setBookings(res.data.bookings || []);
    } catch (e) {
      setMsg(e?.response?.data?.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    if (!confirm("Are you sure you want to cancel this booking?")) return;

    try {
      await cancelBookingApi(bookingId);
      fetchBookings();
    } catch (e) {
      alert(e?.response?.data?.message || "Cancel failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      {msg && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">{msg}</div>
      )}

      {loading ? (
        <div className="mt-6">Loading bookings...</div>
      ) : bookings.length === 0 ? (
        <div className="mt-6 bg-white border rounded-lg p-4">
          No bookings found.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="bg-white border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <div className="text-sm text-gray-500 font-mono">
                  {b.bookingCode}
                </div>
                <h2 className="text-lg font-semibold mt-1">
                  {b.hotelId?.name}
                </h2>
                <p className="text-sm text-gray-600">
                  Room: {b.roomId?.title} • {b.roomId?.roomType}
                </p>
                <p className="text-sm text-gray-600">
                  Dates:{" "}
                  {new Date(b.checkIn).toLocaleDateString()} →{" "}
                  {new Date(b.checkOut).toLocaleDateString()}
                </p>

                <p className="text-sm mt-2">
                  Status:{" "}
                  <span className="font-semibold">{b.status}</span>
                </p>
              </div>

              <div className="flex flex-col gap-2 md:items-end">
                <div className="text-lg font-bold">₹{b.totalPrice}</div>

                {b.status !== "CANCELLED" && (
                  <button
                    onClick={() => handleCancel(b._id)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
