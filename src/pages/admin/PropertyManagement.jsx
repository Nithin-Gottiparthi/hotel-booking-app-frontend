import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHotelAdminApi, getAdminHotelsApi } from "../../api/admin.api";

export default function PropertyManagement() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [showInactive, setShowInactive] = useState(false);

  const loadHotels = async () => {
    try {
      setLoading(true);
      setErr("");

      const res = await getAdminHotelsApi();
      setHotels(res.data.hotels || []);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load hotels");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHotels();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this property?")) return;

    try {
      await deleteHotelAdminApi(id);

      // ✅ update UI instantly (soft delete)
      setHotels((prev) =>
        prev.map((h) => (h._id === id ? { ...h, isActive: false } : h))
      );

      alert("Property marked as inactive ✅");
    } catch (e) {
      console.log("Delete error:", e);
      alert(e?.response?.data?.message || "Delete failed");
    }
  };

  const filteredHotels = showInactive
    ? hotels
    : hotels.filter((h) => h.isActive);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Property Management</h1>

        <Link
          to="/admin/properties/add"
          className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          + Add Property
        </Link>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-2 mb-4">
        <input
          id="inactiveToggle"
          type="checkbox"
          checked={showInactive}
          onChange={(e) => setShowInactive(e.target.checked)}
        />
        <label htmlFor="inactiveToggle" className="text-sm text-gray-700">
          Show inactive properties
        </label>
      </div>

      {loading && <div>Loading properties...</div>}
      {err && <div className="text-red-600">{err}</div>}

      {!loading && filteredHotels.length === 0 ? (
        <div className="bg-white border rounded-lg p-4">No properties found.</div>
      ) : (
        <div className="space-y-3">
          {filteredHotels.map((h) => (
            <div
              key={h._id}
              className="bg-white border rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-lg">{h.name}</h2>

                  {/* ✅ status badge */}
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      h.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {h.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <p className="text-sm text-gray-600">
                  {h.city} • {h.address}
                </p>
                <p className="text-sm font-bold mt-1">₹{h.pricePerNight}/night</p>
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/admin/properties/edit/${h._id}`}
                  className="px-3 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Edit
                </Link>

                {h.isActive && (
                  <button
                    onClick={() => handleDelete(h._id)}
                    className="px-3 py-2 border rounded-lg hover:bg-red-50 text-red-600"
                  >
                    Delete
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
