import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmPaymentApi, getBookingByIdApi } from "../../api/bookings.api";

export default function BookingStep2() {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const loadBooking = async () => {
      try {
        setPageLoading(true);
        setMsg("");

        const res = await getBookingByIdApi(bookingId);
        setBooking(res.data.booking);
      } catch (e) {
        setMsg(e?.response?.data?.message || "Failed to load booking");
      } finally {
        setPageLoading(false);
      }
    };

    loadBooking();
  }, [bookingId]);

  const handlePayNow = async () => {
    try {
      setLoading(true);
      setMsg("");

      await confirmPaymentApi(bookingId);

      navigate("/my-bookings");
    } catch (e) {
      setMsg(e?.response?.data?.message || "Payment confirmation failed");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) return <div className="p-6">Loading payment page...</div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Booking - Step 2</h1>
      <p className="text-gray-600 mt-1">
        This is a sample payment page (dummy payment).
      </p>

      {msg && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">{msg}</div>
      )}

      <div className="mt-6 bg-white border rounded-xl p-5">
        <h2 className="text-lg font-semibold">Payment Summary</h2>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <div>
            <b>Booking Code:</b>{" "}
            <span className="font-mono">{booking?.bookingCode}</span>
          </div>
          <div>
            <b>Hotel:</b> {booking?.hotelId?.name}
          </div>
          <div>
            <b>Room:</b> {booking?.roomId?.title} ({booking?.roomId?.roomType})
          </div>
          <div>
            <b>Check In:</b>{" "}
            {booking?.checkIn ? new Date(booking.checkIn).toLocaleDateString() : "-"}
          </div>
          <div>
            <b>Check Out:</b>{" "}
            {booking?.checkOut
              ? new Date(booking.checkOut).toLocaleDateString()
              : "-"}
          </div>
          <div>
            <b>Guests:</b> {booking?.guests}
          </div>
          <div>
            <b>Status:</b>{" "}
            <span className="font-semibold">{booking?.status}</span>
          </div>

          <hr className="my-3" />

          <div className="text-lg font-bold">
            Final Amount: ₹{booking?.totalPrice}
          </div>
        </div>

        <button
          onClick={handlePayNow}
          disabled={loading || booking?.status === "CONFIRMED"}
          className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-60"
        >
          {booking?.status === "CONFIRMED"
            ? "Already Paid"
            : loading
            ? "Processing..."
            : "Pay Now (Dummy)"}
        </button>

        <button
          onClick={() => navigate("/my-bookings")}
          className="w-full mt-3 border py-2 rounded-lg hover:bg-gray-50"
        >
          Go to My Bookings
        </button>
      </div>
    </div>
  );
}
