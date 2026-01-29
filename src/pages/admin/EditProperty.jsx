import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelByIdApi, getRoomsByHotelApi } from "../../api/hotels.api";
import {
  updateHotelAdminApi,
  addRoomAdminApi,
  updateRoomAdminApi,
  deleteRoomAdminApi,
} from "../../api/admin.api";

export default function EditProperty() {
  const { id } = useParams(); // hotelId
  const navigate = useNavigate();

  /* ---------------- Hotel State ---------------- */
  const [form, setForm] = useState({
    name: "",
    description: "",
    city: "",
    address: "",
    pricePerNight: "",
    amenities: "",
    isActive: true,
  });

  /* ---------------- Rooms State ---------------- */
  const [rooms, setRooms] = useState([]);
  const [roomForm, setRoomForm] = useState({
    title: "",
    roomType: "",
    pricePerNight: "",
    maxGuests: 1,
    totalRooms: 1,
    amenities: "",
  });

  const [editingRoomId, setEditingRoomId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const updateHotelForm = (key, value) =>
    setForm((p) => ({ ...p, [key]: value }));

  const updateRoomForm = (key, value) =>
    setRoomForm((p) => ({ ...p, [key]: value }));

  /* ---------------- Load Hotel + Rooms ---------------- */
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const hotelRes = await getHotelByIdApi(id);
        const roomsRes = await getRoomsByHotelApi(id);

        const h = hotelRes.data.hotel;

        setForm({
          name: h.name || "",
          description: h.description || "",
          city: h.city || "",
          address: h.address || "",
          pricePerNight: h.pricePerNight || "",
          amenities: (h.amenities || []).join(", "),
          isActive: h.isActive ?? true,
        });

        setRooms(roomsRes.data.rooms || []);
      } catch (e) {
        setMsg(e?.response?.data?.message || "Failed to load property");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  /* ---------------- Save Hotel ---------------- */
  const saveHotel = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const payload = {
        ...form,
        pricePerNight: Number(form.pricePerNight),
        amenities: form.amenities
          ? form.amenities.split(",").map((a) => a.trim())
          : [],
      };

      await updateHotelAdminApi(id, payload);
      alert("Hotel updated ✅");
    } catch (e) {
      setMsg(e?.response?.data?.message || "Update failed");
    }
  };

  /* ---------------- Add / Update Room ---------------- */
  const saveRoom = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...roomForm,
        pricePerNight: Number(roomForm.pricePerNight),
        maxGuests: Number(roomForm.maxGuests),
        totalRooms: Number(roomForm.totalRooms),
        amenities: roomForm.amenities
          ? roomForm.amenities.split(",").map((a) => a.trim())
          : [],
      };

      if (editingRoomId) {
        await updateRoomAdminApi(editingRoomId, payload);
        setRooms((prev) =>
          prev.map((r) =>
            r._id === editingRoomId ? { ...r, ...payload } : r
          )
        );
        alert("Room updated ✅");
      } else {
        const res = await addRoomAdminApi(id, payload);
        setRooms((prev) => [...prev, res.data.room]);
        alert("Room added ✅");
      }

      setRoomForm({
        title: "",
        roomType: "",
        pricePerNight: "",
        maxGuests: 1,
        totalRooms: 1,
        amenities: "",
      });
      setEditingRoomId(null);
    } catch (e) {
      alert(e?.response?.data?.message || "Room save failed");
    }
  };

  /* ---------------- Edit Room ---------------- */
  const handleEditRoom = (room) => {
    setEditingRoomId(room._id);
    setRoomForm({
      title: room.title,
      roomType: room.roomType,
      pricePerNight: room.pricePerNight,
      maxGuests: room.maxGuests,
      totalRooms: room.totalRooms,
      amenities: (room.amenities || []).join(", "),
    });
  };

  /* ---------------- Delete Room ---------------- */
  const handleDeleteRoom = async (roomId) => {
    if (!confirm("Delete this room?")) return;

    try {
      await deleteRoomAdminApi(roomId);
      setRooms((prev) => prev.filter((r) => r._id !== roomId));
      alert("Room deleted ✅");
    } catch (e) {
      alert(e?.response?.data?.message || "Delete failed");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      {/* ---------------- Hotel Section ---------------- */}
      <section>
        <h1 className="text-2xl font-bold mb-4">Edit Property</h1>

        {msg && (
          <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg">
            {msg}
          </div>
        )}

        <form
          onSubmit={saveHotel}
          className="bg-white border rounded-xl p-5 space-y-3"
        >
          <input
            className="border p-2 rounded-lg w-full"
            placeholder="Hotel Name"
            value={form.name}
            onChange={(e) => updateHotelForm("name", e.target.value)}
          />

          <textarea
            className="border p-2 rounded-lg w-full"
            placeholder="Description"
            value={form.description}
            onChange={(e) => updateHotelForm("description", e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              className="border p-2 rounded-lg"
              placeholder="City"
              value={form.city}
              onChange={(e) => updateHotelForm("city", e.target.value)}
            />
            <input
              className="border p-2 rounded-lg"
              placeholder="Price per night"
              type="number"
              value={form.pricePerNight}
              onChange={(e) =>
                updateHotelForm("pricePerNight", e.target.value)
              }
            />
          </div>

          <input
            className="border p-2 rounded-lg w-full"
            placeholder="Address"
            value={form.address}
            onChange={(e) => updateHotelForm("address", e.target.value)}
          />

          <input
            className="border p-2 rounded-lg w-full"
            placeholder="Amenities (comma separated)"
            value={form.amenities}
            onChange={(e) => updateHotelForm("amenities", e.target.value)}
          />

          <button className="w-full bg-black text-white py-2 rounded-lg">
            Save Property
          </button>
        </form>
      </section>

      {/* ---------------- Rooms Section ---------------- */}
      <section>
        <h2 className="text-xl font-bold mb-4">Rooms Management</h2>

        {/* Room Form */}
        <form
          onSubmit={saveRoom}
          className="bg-white border rounded-xl p-5 grid grid-cols-1 md:grid-cols-3 gap-3"
        >
          <input
            className="border p-2 rounded-lg"
            placeholder="Room Title"
            value={roomForm.title}
            onChange={(e) => updateRoomForm("title", e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            placeholder="Room Type (Deluxe, Suite...)"
            value={roomForm.roomType}
            onChange={(e) => updateRoomForm("roomType", e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            placeholder="Price per night"
            type="number"
            value={roomForm.pricePerNight}
            onChange={(e) =>
              updateRoomForm("pricePerNight", e.target.value)
            }
          />

          <input
            className="border p-2 rounded-lg"
            placeholder="Max Guests"
            type="number"
            value={roomForm.maxGuests}
            onChange={(e) => updateRoomForm("maxGuests", e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            placeholder="Total Rooms"
            type="number"
            value={roomForm.totalRooms}
            onChange={(e) => updateRoomForm("totalRooms", e.target.value)}
          />

          <input
            className="border p-2 rounded-lg md:col-span-3"
            placeholder="Amenities (comma separated)"
            value={roomForm.amenities}
            onChange={(e) => updateRoomForm("amenities", e.target.value)}
          />

          <button className="md:col-span-3 bg-black text-white py-2 rounded-lg">
            {editingRoomId ? "Update Room" : "Add Room"}
          </button>
        </form>

        {/* Rooms List */}
        <div className="mt-5 space-y-3">
          {rooms.length === 0 ? (
            <div className="bg-white border rounded-lg p-4">
              No rooms added yet.
            </div>
          ) : (
            rooms.map((r) => (
              <div
                key={r._id}
                className="bg-white border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">
                    {r.title} ({r.roomType})
                  </h3>
                  <p className="text-sm text-gray-600">
                    ₹{r.pricePerNight}/night • Max {r.maxGuests} guests •{" "}
                    {r.totalRooms} rooms
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditRoom(r)}
                    className="px-3 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRoom(r._id)}
                    className="px-3 py-2 border rounded-lg text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
