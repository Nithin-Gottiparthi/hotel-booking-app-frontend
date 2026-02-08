import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { Icons } from '../ui/Icons';
import Logo from '../ui/Logo';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/owner" className="text-gray-900 hover:text-indigo-600 font-medium transition-colors border-r pr-6 border-gray-300">
              List Your Property
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/explore" className="bg-indigo-600 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full font-bold shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all text-xs md:text-sm">
              Book Now
            </Link>

            {!isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={user?.avatar || 'https://via.placeholder.com/32'}
                    alt={user?.name || 'User'}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:inline font-medium text-gray-700">{user?.name}</span>
                  <span className="text-gray-400 text-xs text-[0.6rem]">▼</span>
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowUserMenu(false)}
                    />
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        👤 My Profile
                      </Link>
                      <Link
                        to="/my-bookings"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        📅 My Bookings
                      </Link>
                      <Link
                        to="/my-events"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        🎉 My Events
                      </Link>
                      <Link
                        to="/saved"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        ❤️ Saved Properties
                      </Link>
                      <Link
                        to="/notifications"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        🔔 Notifications
                      </Link>
                      <div className="border-t my-2"></div>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl p-6 transform transition-transform animate-slide-left lg:hidden">
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-400">
                <Icons.X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link
                to="/owner"
                className="text-lg font-bold text-indigo-600 p-3 bg-indigo-50 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                List Your Property
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-gray-700 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {!isAuthenticated && (
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                  <Link
                    to="/login"
                    className="text-center py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-center py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

