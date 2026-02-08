// Owner Sidebar Navigation

import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const navItems = [
        { path: '/owner', label: 'Dashboard', icon: '📊', exact: true },
        { path: '/owner/analytics', label: 'Analytics', icon: '📈' },
        { path: '/owner/properties', label: 'Properties', icon: '🏠' },
        { path: '/owner/booking-requests', label: 'Booking Requests', icon: '📥' },
        { path: '/owner/calendar', label: 'Calendar', icon: '📅' },
        { path: '/owner/payouts', label: 'Payouts', icon: '💰' },
        { path: '/owner/notifications', label: 'Notifications', icon: '🔔' }
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-800">
                <Link to="/owner" className="font-bold text-2xl">
                    🏨 Vibestey
                </Link>
                <p className="text-sm text-gray-400 mt-1">Owner Dashboard</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const active = item.exact
                        ? location.pathname === item.path
                        : isActive(item.path);

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${active
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                }
              `}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                    <span>🏠</span>
                    <span className="text-sm">Back to Main Site</span>
                </Link>
            </div>
        </aside>
    );
}
