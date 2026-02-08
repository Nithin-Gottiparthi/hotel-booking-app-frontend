import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHotelsApi } from "../../api/hotels.api";

export default function Landing() {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);

  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");

  /* ---------- Load featured hotels ---------- */
  useEffect(() => {
    (async () => {
      try {
        const res = await getHotelsApi({ limit: 6 });
        setFeatured(res.data.hotels || []);
      } catch {
        console.log("featured hotels load failed");
      }
    })();
  }, []);

  /* ---------- Search ---------- */
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (budget) params.set("maxPrice", budget);
    navigate(`/hotels?${params.toString()}`);
  };

  return (
    <div className="bg-[#f7f8fc]">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Find Your Future <br />
            <span className="text-vib-purple">Dream Accommodation</span>
          </h1>

          <p className="mt-4 text-gray-500 max-w-lg">
            Want to find an accommodation? Vibestey helps you discover rooms
            that perfectly match your lifestyle and needs.
          </p>

          {/* Stats */}
          <div className="flex gap-14 mt-8">
            <Stat value="4235+" label="Rooms" />
            <Stat value="535+" label="Reservation / Semester" />
            <Stat value="19905+" label="Students" />
          </div>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 bg-white border rounded-xl shadow-md p-3 flex flex-col md:flex-row gap-3"
          >
            <input
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
              placeholder="Location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <select
              className="border rounded-lg px-3 py-2 text-sm"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Budget</option>
              <option value="1000">₹1000</option>
              <option value="3000">₹3000</option>
              <option value="6000">₹6000</option>
            </select>

            <button className="bg-vib-purple text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90">
              Search
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop"
          className="rounded-2xl shadow-md h-[480px] w-full object-cover"
        />
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200"
          className="rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-bold">
            We Help Students Find Their Perfect Home
          </h2>

          <p className="mt-4 text-gray-500">
            Vibestey is your go-to hub for safe, verified, and affordable
            student housing. We simplify your search and make booking easy.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <Badge text="Professional Team" />
            <Badge text="Always in touch" />
            <Badge text="Verified Rooms" />
            <Badge text="Fast & Secure Booking" />
          </div>
        </div>
      </section>

      {/* ================= ROOMS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold mb-8">Reserve The Finest Rooms</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((h) => (
            <Link
              key={h._id}
              to={`/hotels/${h._id}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <div className="font-semibold">{h.name}</div>
                <div className="text-sm text-gray-500">{h.city}</div>
                <div className="mt-2 font-bold text-vib-purple">
                  ₹{h.pricePerNight}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 text-center">
        <p className="text-vib-purple font-semibold text-sm">Testimonials</p>
        <h2 className="text-2xl font-bold mt-2">
          That’s What Our Clients Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10 px-6">
          <Testimonial name="Serena Johnson" />
          <Testimonial name="Ilias Elfhassi" />
          <Testimonial name="Demi Wilson" />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="max-w-6xl mx-auto py-16 text-center px-6">
        <h2 className="text-2xl font-bold">
          Fast, Intuitive And Absolutely Safe!
        </h2>

        <div className="grid md:grid-cols-4 gap-10 mt-12">
          <Step n="1" t="Pick a few places" />
          <Step n="2" t="Accept reservation" />
          <Step n="3" t="Payment" />
          <Step n="4" t="Get your keys!" />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="bg-vib-purple py-14 text-center text-white">
        <h3 className="text-2xl font-bold">Have questions or doubts?</h3>
        <p className="opacity-80 mt-2">Don’t hesitate to contact us</p>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-3 mt-6 px-6">
          <input className="flex-1 px-4 py-3 rounded-lg text-black" placeholder="Full Name" />
          <input className="flex-1 px-4 py-3 rounded-lg text-black" placeholder="Enter your question..." />
          <button className="bg-white text-vib-purple px-6 py-3 rounded-lg font-semibold">
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

/* ---------- small components ---------- */

const Stat = ({ value, label }) => (
  <div>
    <div className="text-2xl font-extrabold text-vib-purple">{value}</div>
    <div className="text-xs text-gray-500">{label}</div>
  </div>
);

const Badge = ({ text }) => (
  <span className="px-3 py-1 rounded-full bg-vib-purple/10 text-vib-purple text-xs">
    {text}
  </span>
);

const Testimonial = ({ name }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md text-left">
    <p className="text-sm text-gray-500">
      Vibestey made finding accommodation incredibly easy and stress-free.
    </p>
    <div className="mt-4 font-semibold">{name}</div>
  </div>
);

const Step = ({ n, t }) => (
  <div>
    <div className="text-4xl font-extrabold text-vib-purple">{n}</div>
    <div className="mt-2 font-semibold">{t}</div>
  </div>
);
