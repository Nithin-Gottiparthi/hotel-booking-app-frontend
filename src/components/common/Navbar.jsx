import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/branding/logo.png";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Vibestey" className="h-9 w-auto" />
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-vib-muted">
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/hotels">Rooms</MenuLink>
          <MenuLink to="/about">About Us</MenuLink>
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link to="/login" className="text-sm text-vib-muted hover:text-vib-purple">
                Log In
              </Link>
              <Link
                to="/hotels"
                className="px-4 py-2 rounded-lg border border-vib-border hover:bg-gray-50 text-sm font-medium"
              >
                Rent a Room
              </Link>
            </>
          ) : (
            <>
              {user.role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="text-sm px-3 py-2 rounded-lg border border-vib-border hover:bg-gray-50"
                >
                  Admin Panel
                </Link>
              )}

              <Link to="/dashboard" className="text-sm text-vib-muted hover:text-vib-purple">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 rounded-lg bg-vib-purple text-white hover:bg-vib-purpleDark"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-vib-purple transition ${
          isActive ? "text-vib-purple font-semibold" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
