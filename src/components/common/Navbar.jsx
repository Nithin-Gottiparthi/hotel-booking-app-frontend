import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          HotelBooking
        </Link>

        <nav className="flex gap-4 items-center">
          <Link to="/hotels">Hotels</Link>
          <Link to="/about">About</Link>

          {!user ? (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">
                Login
              </Link>
              <Link to="/signup" className="px-3 py-1 bg-black text-white rounded">
                Signup
              </Link>
            </>
          ) : (
            <>
              {user.role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="px-3 py-1 border rounded bg-gray-50"
                >
                  Admin Panel
                </Link>
              )}

              <Link to="/dashboard">Dashboard</Link>
              <Link to="/my-bookings">My Bookings</Link>

              <button onClick={logout} className="px-3 py-1 border rounded">
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
