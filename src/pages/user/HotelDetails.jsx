import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelByIdApi, getRoomsByHotelApi } from "../../api/hotels.api";

export default function HotelDetails() {
  const { id } = useParams(); // hotelId
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const fetchDetails = async () => {
    try {
      setLoading(true);
      setErr("");

      const [hotelRes, roomsRes] = await Promise.all([
        getHotelByIdApi(id),
        getRoomsByHotelApi(id),
      ]);

      setHotel(hotelRes.data.hotel);
      setRooms(roomsRes.data.rooms || []);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load hotel details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleBookRoom = (roomId) => {
    // booking step1 expects info
    navigate(`/booking/step-1?hotelId=${id}&roomId=${roomId}`);
  };

  if (loading) return <div className="p-6">Loading...</div>;
  if (err) return <div className="p-6 text-red-600">{err}</div>;
  if (!hotel) return <div className="p-6">Hotel not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hotel Header */}
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <div className="h-52 bg-gray-200 flex items-center justify-center text-gray-500">
          Hotel Banner Image
        </div>

        <div className="p-5">
          <h1 className="text-2xl font-bold">{hotel.name}</h1>

          <p className="text-gray-600 mt-1">
            {hotel.city} • {hotel.address}
          </p>

          {hotel.description && (
            <p className="mt-3 text-gray-700">{hotel.description}</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {(hotel.amenities || []).map((a, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full border bg-gray-50"
              >
                {a}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-lg font-bold">
              Starting ₹{hotel.pricePerNight}{" "}
              <span className="text-sm font-normal text-gray-500">/ night</span>
            </div>
            <div className="text-sm text-gray-600">
              ⭐ {hotel.ratingAvg?.toFixed?.(1) || 0} ({hotel.ratingCount || 0})
            </div>
          </div>
        </div>
      </div>

      {/* Rooms */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Available Rooms</h2>

        {rooms.length === 0 ? (
          <div className="p-4 bg-white border rounded-lg">
            No rooms available for this hotel.
          </div>
        ) : (
          <div className="space-y-4">
            {rooms.map((r) => (
              <div
                key={r._id}
                className="bg-white border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Type: {r.roomType} • Max Guests: {r.maxGuests} • Total Rooms:{" "}
                    {r.totalRooms}
                  </p>

                  {r.description && (
                    <p className="text-sm text-gray-700 mt-2">{r.description}</p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(r.amenities || []).map((a, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full border bg-gray-50"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end">
                  <div className="text-lg font-bold">₹{r.pricePerNight}/night</div>
                  <button
                    onClick={() => handleBookRoom(r._id)}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
