import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createHotelAdminApi } from "../../api/admin.api";

export default function AddProperty() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    city: "",
    address: "",
    pricePerNight: "",
    amenities: "",
  });

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      setLoading(true);

      const payload = {
        ...form,
        pricePerNight: Number(form.pricePerNight),
        amenities: form.amenities
          ? form.amenities.split(",").map((a) => a.trim())
          : [],
      };

      await createHotelAdminApi(payload);

      navigate("/admin/properties");
    } catch (e) {
      setMsg(e?.response?.data?.message || "Failed to add property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Property</h1>

      {msg && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg">{msg}</div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-5 space-y-3"
      >
        <input
          className="border p-2 rounded-lg w-full"
          placeholder="Hotel Name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <textarea
          className="border p-2 rounded-lg w-full"
          placeholder="Description"
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className="border p-2 rounded-lg"
            placeholder="City"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />
          <input
            className="border p-2 rounded-lg"
            placeholder="Price per night"
            type="number"
            value={form.pricePerNight}
            onChange={(e) => update("pricePerNight", e.target.value)}
          />
        </div>

        <input
          className="border p-2 rounded-lg w-full"
          placeholder="Address"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
        />

        <input
          className="border p-2 rounded-lg w-full"
          placeholder="Amenities (comma separated)"
          value={form.amenities}
          onChange={(e) => update("amenities", e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
        >
          {loading ? "Saving..." : "Create Property"}
        </button>
      </form>
    </div>
  );
}
