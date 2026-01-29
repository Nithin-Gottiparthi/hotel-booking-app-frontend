import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { createBookingApi } from "../../api/bookings.api";
import { getHotelByIdApi, getRoomsByHotelApi } from "../../api/hotels.api";

export default function BookingStep1() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const hotelId = searchParams.get("hotelId");
  const roomId = searchParams.get("roomId");

  const [hotel, setHotel] = useState(null);
  const [room, setRoom] = useState(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (!hotelId || !roomId) {
          setMsg("Missing hotelId or roomId. Please go back and select a room.");
          setPageLoading(false);
          return;
        }

        const [hotelRes, roomsRes] = await Promise.all([
          getHotelByIdApi(hotelId),
          getRoomsByHotelApi(hotelId),
        ]);

        setHotel(hotelRes.data.hotel);

        const found = (roomsRes.data.rooms || []).find((r) => r._id === roomId);
        setRoom(found || null);
      } catch (e) {
        setMsg(e?.response?.data?.message || "Failed to load booking details");
      } finally {
        setPageLoading(false);
      }
    };

    load();
  }, [hotelId, roomId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!hotelId || !roomId) {
      setMsg("Invalid booking details.");
      return;
    }

    if (!checkIn || !checkOut) {
      setMsg("Please select check-in and check-out dates.");
      return;
    }

    if (!fullName || !phone || !email) {
      setMsg("Please fill all customer details.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        hotelId,
        roomId,
        checkIn,
        checkOut,
        guests: Number(guests),
        fullName,
        phone,
        email,
      };

      const res = await createBookingApi(payload);
      const bookingId = res.data.booking._id;

      // ✅ Step 2 payment screen
      navigate(`/booking/step-2/${bookingId}`);
    } catch (e) {
      setMsg(e?.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) return <div className="p-6">Loading booking...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Booking - Step 1</h1>
      <p className="text-gray-600 mt-1">
        Fill your details to continue booking.
      </p>

      {msg && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">{msg}</div>
      )}

      {/* Summary */}
      <div className="mt-6 bg-white border rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-2">Booking Summary</h2>

        <div className="text-sm text-gray-700 space-y-1">
          <div>
            <b>Hotel:</b> {hotel?.name || "N/A"}
          </div>
          <div>
            <b>Room:</b> {room?.title || "N/A"} ({room?.roomType || "N/A"})
          </div>
          <div>
            <b>Price:</b> ₹{room?.pricePerNight || 0}/night
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white border rounded-xl p-5 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className="border p-2 rounded-lg"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="border p-2 rounded-lg md:col-span-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="text-sm text-gray-600">Check In</label>
            <input
              className="border p-2 rounded-lg w-full"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Check Out</label>
            <input
              className="border p-2 rounded-lg w-full"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Guests</label>
            <input
              className="border p-2 rounded-lg w-full"
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
        >
          {loading ? "Creating Booking..." : "Continue to Payment"}
        </button>
      </form>
    </div>
  );
}
