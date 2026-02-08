import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHotelsApi } from "../../api/hotels.api";

export default function Landing() {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);

  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const testimonials = [
    {
      id: 1,
      name: "Serena Johnson",
      text: "Highly recommend. I came across this platform during my Erasmus program. The customer support was exceptional—always responsive and helpful in answering all my queries.",
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Ilias Elfhassi",
      text: "Erasmus Life Housing deserves a huge shoutout for making my housing search stress-free. The rooms were exactly as described, and the process was smooth.",
      avatar:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Demi Wilson",
      text: "Vibestey made finding accommodation incredibly easy and stress-free. Booking was fast, secure, and the support team was always in touch.",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  /* ---------- Load featured hotels ---------- */
  useEffect(() => {
    (async () => {
      try {
        const res = await getHotelsApi({ limit: 6 });
        const hotels = res.data.hotels || [];

        const fallback = Array.from({ length: 6 - hotels.length }).map((_, i) => ({
          _id: `dummy-${i}`,
          name: "Sample Room",
          city: "Lisbon",
          address: "123 Avenida da Liberdade",
          pricePerNight: 5000,
          photos: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
          ],
        }));

        setFeatured([...hotels, ...fallback]);

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

      <section >
        {/* This is the IMPORTANT wrapper */}
        <div className="relative max-w-[1440px] mx-auto min-h-[695px]">

          {/* Two column layout */}
          <div className="grid md:grid-cols-2 min-h-[695px]">

            {/* LEFT */}
            <div className="flex flex-col justify-center px-6 md:px-16 bg-white">
              <h1 className="text-[44px] md:text-[52px] leading-[1.1] font-semibold text-gray-900">
                <span className="text-[#2d4cff] font-semibold text-[18px] md:text-[20px] block mb-3">
                  Find Your Future
                </span>
                <span className="font-extrabold">Dream Accommodation</span>
              </h1>

              <p className="mt-6 text-gray-500 max-w-md leading-relaxed">
                Want to find an accommodation? Vibestey helps you discover rooms that
                perfectly match your lifestyle and needs.
              </p>

              {/* Stats */}
              <div className="flex gap-14 mt-10">
                <div>
                  <p className="text-3xl font-bold text-gray-900">4235+</p>
                  <p className="text-sm text-gray-500 mt-1">Rooms</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">535+</p>
                  <p className="text-sm text-gray-500 mt-1">Reservation / Semester</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">19905+</p>
                  <p className="text-sm text-gray-500 mt-1">Students</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="building"
              />
            </div>
          </div>

          {/* SEARCH BAR - now positioned correctly */}
          <form
            onSubmit={handleSearch}
            className=" absolute left-1/2 bottom-[55px] -translate-x-1/2 w-[92%] max-w-4xl bg-white rounded-xl shadow-xl border px-5 py-4 flex items-center gap-4 z-50"
          >
            {/* Location */}
            <div className="flex-1">
              <input
                className="w-full border rounded-lg px-4 py-3 text-sm outline-none"
                placeholder="Location"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Budget */}
            <div className="w-[170px]">
              <select
                className="w-full border rounded-lg px-4 py-3 text-sm"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Budget</option>
                <option value="1000">₹1000</option>
                <option value="3000">₹3000</option>
                <option value="6000">₹6000</option>
              </select>
            </div>

            {/* Checkin */}
            <div className="w-[170px] hidden md:block">
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-3 text-sm"
              />
            </div>

            {/* Button */}
            <button className="bg-[#6c63ff] hover:bg-[#5b52ff] transition text-white px-8 py-3 rounded-lg font-semibold rounded-lg">
              Search
            </button>
          </form>
        </div>
      </section>


      {/* ================= ABOUT PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT - TWO OVERLAPPING IMAGES */}
        <div className="relative w-full max-w-[520px] mx-auto">

          {/* Main big image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
              alt="building"
              className="w-full h-[380px] object-cover"
            />
          </div>

          {/* Second smaller image overlapping */}
          <div className="absolute -bottom-16 right-0 w-[62%] rounded-2xl overflow-hidden shadow-xl border-[10px] border-white">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
              alt="door"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="pt-20 md:pt-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            We Help Students Find Their Perfect Home
          </h2>

          <p className="text-[#2d4cff] font-semibold mt-3 text-lg">
            About Us
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Erasmus Life Housing is your go-to hub for finding the perfect home for
            students, by students. Since 2013, our team has helped tons of students
            discover their ideal place. We’ve got a wide selection of student-friendly
            rooms, all built and managed just for you.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Our ultimate goal is to make Lisbon the number one destination for
            International Students and Young Workers, and we most surely don’t want
            that your experience finding accommodation to be a negative point of that
            experience!
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <Badge text="Professional Team" />
            <Badge text="Always in touch" />
            <Badge text="Verified Rooms" />
            <Badge text="Fast and Secure Booking" />
          </div>
        </div>
      </section>
      {/* Spacer so overlap doesn’t cut off */}
      <div className="h-[60px]" />

      {/* ================= ROOMS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-gray-900">
          Reserve The Finest Rooms
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((h) => (
            <Link
              key={h._id}
              to={`/hotels/${h._id}`}
              className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition border"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={
                    h.photos?.[0] ||
                    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop"
                  }
                  className="h-[210px] w-full object-cover"
                  alt={h.name}
                />

                {/* Heart icon (fake like figma) */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center">
                  ❤️
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-gray-900 text-[15px] leading-snug">
                    {h.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  {h.address || h.city || "Lisbon"}
                </p>

                <p className="mt-3 font-extrabold text-[#2d4cff]">
                  ₹{h.pricePerNight}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="w-full bg-[#f7f8ff] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#2d4cff] font-semibold text-sm mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            That’s What Our Clients Say
          </h2>

          {/* Cards */}
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className=" bg-[#1f3bb3] text-white rounded-2xl shadow-lg px-7 py-10 text-left min-h-[250px] flex flex-col justify-between"
              >
                {/* Top */}
                <p className="text-white/90 leading-relaxed text-sm">
                  {t.text}
                </p>

                {/* Bottom */}
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white/30"
                  />

                  <p className="font-semibold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12">
            <button className="px-6 py-2.5 rounded-lg bg-white text-gray-700 font-medium shadow hover:shadow-md transition">
              Read More
            </button>
          </div>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#2d4cff] font-semibold text-sm mb-3">
            Reservation Process
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Fast, Intuitive And Absolutely Safe !
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
            {/* 1 */}
            <div>
              <h3 className="text-6xl font-extrabold text-gray-800 mb-4">1</h3>
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                Pick a few places
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Explore hundreds of high-quality rooms, studios, and apartments. Save
                favorites and book it. Finding your dream home could not be easier!
              </p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-6xl font-extrabold text-gray-800 mb-4">2</h3>
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                Accepting a reservation
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                You will receive the acceptance of the reservation from the owner in
                just a couple of hours. You will not have to wait long for an answer
                and torment yourself with guesses.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-6xl font-extrabold text-gray-800 mb-4">3</h3>
              <h4 className="font-bold text-gray-900 text-lg mb-3">Payment</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                All that is necessary after receiving a response, is to send the
                payment and you are almost at the finish line!
              </p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-6xl font-extrabold text-gray-800 mb-4">4</h3>
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                Get your keys!
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your accommodation is reserved, get ready to move as soon as possible
                and check in on your chosen date.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="w-full bg-[#233ea9] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Have questions or doubts?
          </h2>

          <p className="text-white/80 mt-3 text-base">
            Don’t Hesitate Contact Us
          </p>

          {/* Form */}
          <form className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full md:w-[260px] h-12 px-4 rounded-md outline-none bg-white text-gray-700"
            />

            <input
              type="text"
              placeholder="Enter your Question...."
              className="w-full md:w-[380px] h-12 px-4 rounded-md outline-none bg-white text-gray-700"
            />

            <button
              type="submit"
              className="w-full md:w-[90px] h-12 rounded-md bg-[#dbe0ff] text-[#233ea9] font-semibold hover:bg-white transition"
            >
              Send
            </button>
          </form>
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
