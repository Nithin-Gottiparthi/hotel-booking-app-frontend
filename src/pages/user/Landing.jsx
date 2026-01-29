import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHotelsApi } from "../../api/hotels.api";

export default function Landing() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getHotelsApi({ limit: 6 });
        setHotels(res.data.hotels || []);
      } catch (e) {
        console.log("Landing hotels fetch failed");
      }
    };
    load();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) navigate(`/hotels?city=${city}`);
    else navigate("/hotels");
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Book Hotels Easily <br /> with Secure Booking
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl">
            Search hotels, choose rooms, confirm booking with a simple dummy
            payment step. Built using MERN stack.
          </p>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mt-8 bg-white rounded-xl p-3 flex flex-col md:flex-row gap-3"
          >
            <input
              className="flex-1 border rounded-lg p-3 text-black"
              placeholder="Search by city (Hyderabad...)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90">
              Search Hotels
            </button>
          </form>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="max-w-6xl mx-auto p-6 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Hotels</h2>
          <Link to="/hotels" className="text-sm underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hotels.map((h) => (
            <Link
              key={h._id}
              to={`/hotels/${h._id}`}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Hotel Image
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{h.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {h.city} • {h.address}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold">₹{h.pricePerNight}/night</span>
                  <span className="text-sm text-gray-600">⭐ {h.ratingAvg || 0}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-black text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Ready to Book?</h2>
            <p className="text-gray-200 mt-2">
              Explore all properties and book rooms instantly.
            </p>
          </div>
          <Link
            to="/hotels"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Explore Hotels
          </Link>
        </div>
      </section>
    </div>
  );
}
