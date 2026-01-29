import { Outlet, Link } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">
          <Link className="block hover:underline" to="/admin">
            Dashboard
          </Link>
          <Link className="block hover:underline" to="/admin/properties">
            Properties
          </Link>
          <Link className="block hover:underline" to="/admin/booking-requests">
            Booking Requests
          </Link>
          <Link className="block hover:underline" to="/admin/calendar">
            Calendar
          </Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
