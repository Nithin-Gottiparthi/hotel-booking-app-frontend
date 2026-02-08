// Owner Navbar (Top Header)

import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export default function OwnerNavbar() {
    const { user, logout } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
            {/* Page Title / Breadcrumb */}
            <div>
                <h1 className="text-xl font-semibold text-gray-800">
                    Welcome back, {user?.name}!
                </h1>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-xl">🔔</span>
                    {/* Notification Badge */}
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Menu */}
                <div className="relative">
                    <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <img
                            src={user?.avatar}
                            alt={user?.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium text-gray-700">{user?.name}</span>
                        <span className="text-gray-400">▼</span>
                    </button>

                    {/* Dropdown */}
                    {showUserMenu && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setShowUserMenu(false)}
                            />
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-20">
                                <div className="px-4 py-2 border-b">
                                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                                    <p className="text-xs text-gray-500">{user?.email}</p>
                                </div>

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
            </div>
        </header>
    );
}
