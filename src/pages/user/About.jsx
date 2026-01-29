export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-gray-600 mt-3">
        This Hotel Booking App is a MERN Stack project that allows users to find
        hotels, select rooms, and complete bookings using JWT-based authentication
        and role-based admin management.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <Card title="Fast Booking" desc="Search hotels and book rooms quickly with smooth UI." />
        <Card title="Secure Auth" desc="JWT authentication + password hashing using bcrypt." />
        <Card title="Admin Panel" desc="Admin can manage hotels, rooms and bookings." />
      </div>

      <div className="mt-10 bg-white border rounded-xl p-6">
        <h2 className="text-xl font-bold">Tech Stack</h2>
        <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
          <li>Frontend: React + Vite + Tailwind CSS</li>
          <li>Backend: Node.js + Express</li>
          <li>Database: MongoDB</li>
          <li>Auth: JWT + bcrypt password hashing</li>
        </ul>
      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
