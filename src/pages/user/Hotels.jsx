import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getHotelsApi } from "../../api/hotels.api";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  // form state from URL params (so filters persist)
  const [city, setCity] = useState(searchParams.get("city") || "");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const fetchHotels = async (query = {}) => {
    try {
      setLoading(true);
      setErr("");

      const res = await getHotelsApi(query);
      setHotels(res.data.hotels || []);
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load hotels");
    } finally {
      setLoading(false);
    }
  };

  // load hotels when URL params change
  useEffect(() => {
    const query = {
      city: searchParams.get("city") || undefined,
      search: searchParams.get("search") || undefined,
      minPrice: searchParams.get("minPrice") || undefined,
      maxPrice: searchParams.get("maxPrice") || undefined,
    };

    fetchHotels(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleApplyFilters = (e) => {
    e.preventDefault();

    const params = {};
    if (city) params.city = city;
    if (search) params.search = search;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    setSearchParams(params);
  };

  const handleClear = () => {
    setCity("");
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSearchParams({});
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Find Hotels</h1>
        <button
          onClick={handleClear}
          className="text-sm px-3 py-2 border rounded-lg hover:bg-gray-50"
        >
          Clear Filters
        </button>
      </div>

      {/* Filters */}
      <form
        onSubmit={handleApplyFilters}
        className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3 bg-white p-4 rounded-xl shadow"
      >
        <input
          className="border rounded-lg p-2"
          placeholder="City (Hyderabad...)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="border rounded-lg p-2 md:col-span-2"
          placeholder="Search hotel name or address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className="border rounded-lg p-2"
          placeholder="Min price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          className="border rounded-lg p-2"
          placeholder="Max price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <button className="md:col-span-5 bg-black text-white p-2 rounded-lg hover:opacity-90">
          Apply Filters
        </button>
      </form>

      {/* Hotels list */}
      <div className="mt-6">
        {loading && <div className="p-4">Loading hotels...</div>}
        {err && (
          <div className="p-3 bg-red-100 text-red-700 rounded-lg">{err}</div>
        )}

        {!loading && !err && hotels.length === 0 && (
          <div className="p-4 border rounded-lg bg-white">
            No hotels found.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {hotels.map((h) => (
            <div
              key={h._id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* placeholder image */}
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Hotel Image
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{h.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {h.city} • {h.address}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">
                    ₹{h.pricePerNight} <span className="text-sm font-normal text-gray-500">/ night</span>
                  </span>
                  <span className="text-sm text-gray-600">
                    ⭐ {h.ratingAvg?.toFixed?.(1) || 0}
                  </span>
                </div>

                <Link
                  to={`/hotels/${h._id}`}
                  className="block mt-4 text-center bg-black text-white py-2 rounded-lg hover:opacity-90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
