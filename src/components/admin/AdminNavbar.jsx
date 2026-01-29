import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminNavbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Link to="/" className="font-bold text-lg">
          HotelBooking
        </Link>
        <span className="text-sm text-gray-500">/ Admin</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-sm font-semibold">{user?.name || "Admin"}</div>
          <div className="text-xs text-gray-500">{user?.email}</div>
        </div>

        <button
          onClick={handleLogout}
          className="px-3 py-2 border rounded-lg hover:bg-gray-50"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
