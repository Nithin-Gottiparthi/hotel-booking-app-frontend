// Owner Dashboard - "The Command Center"
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { properties } from '../../api/properties';
import { getPendingBookings } from '../../api/bookings';
import { Icons } from '../../components/ui/Icons';

export default function OwnerDashboard() {
    const { user } = useAuth();
    const ownerProperties = properties.slice(0, 3);
    const pendingBookings = getPendingBookings().slice(0, 4);

    const stats = [
        { label: 'Total Revenue', value: '₹2.4L', change: '+12%', icon: Icons.Star }, // Using Star as placeholder for currency if needed, or stick to text
        { label: 'Occupancy Rate', value: '84%', change: '+5%', icon: Icons.Check },
        { label: 'Active Guests', value: '12', change: '0%', icon: Icons.User },
        { label: 'Pending Requests', value: '5', change: '-2', icon: Icons.ChevronRight } // Placeholder icon
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* HEADER SECTION */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-2 block">Command Center</span>
                            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                                Good morning, <span className="italic text-indigo-600">{user?.name || 'Partner'}</span>.
                            </h1>
                        </div>
                        <Link
                            to="/owner/properties/add"
                            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-colors font-medium"
                        >
                            <Icons.Plus className="w-4 h-4 mr-2" /> List New Haven
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* STATS OVERVIEW */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-slate-500 text-sm uppercase tracking-wide font-medium">{stat.label}</p>
                                <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-50 ${stat.change.includes('+') ? 'text-green-600' : 'text-slate-400'}`}>
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-3xl font-serif font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* MAIN FEED - Pending Actions */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-serif">Action Required</h2>
                            <Link to="/owner/booking-requests" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 uppercase tracking-wide">
                                View All Requests
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {pendingBookings.length > 0 ? (
                                pendingBookings.map((booking) => (
                                    <div key={booking.id} className="bg-white p-6 rounded-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6 hover:border-indigo-100 transition-colors">
                                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                                            <Icons.User className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <p className="font-serif text-lg text-slate-900">
                                                <span className="font-bold">{booking.userName}</span> wants to book <span className="italic">{booking.propertyName}</span>
                                            </p>
                                            <p className="text-slate-500 text-sm mt-1">
                                                {new Date(booking.checkIn).toLocaleDateString()} — {new Date(booking.checkOut).toLocaleDateString()} • {booking.guests} Guests
                                            </p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="px-6 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-sm font-medium text-sm">Decline</button>
                                            <button className="px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-sm font-medium text-sm">Approve</button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 bg-white border border-slate-100 border-dashed rounded-sm">
                                    <p className="text-slate-400">All caught up! No pending requests.</p>
                                </div>
                            )}
                        </div>

                        {/* Analytics Preview */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-serif mb-8">Performance Insight</h2>
                            <div className="bg-slate-900 rounded-sm p-8 text-white relative overflow-hidden">
                                <div className="relative z-10 flex justify-between items-end">
                                    <div>
                                        <p className="text-indigo-300 uppercase tracking-widest text-xs mb-2">This Month's Earnings</p>
                                        <p className="text-5xl font-serif">₹84,500</p>
                                        <p className="text-slate-400 text-sm mt-2">Top performing: <span className="text-white">Sunset Villa (+45%)</span></p>
                                    </div>
                                    <Link to="/owner/analytics" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-sm text-sm font-medium transition-colors">
                                        Full Report
                                    </Link>
                                </div>
                                {/* Abstract Chart Graphic */}
                                <div className="absolute bottom-0 right-0 w-64 h-32 bg-indigo-600/20 blur-3xl rounded-full translate-y-1/2 translate-x-1/2"></div>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR - Your Properties */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-serif">Your Havens</h2>
                            <Link to="/owner/properties" className="text-sm font-bold text-slate-400 hover:text-slate-600 uppercase tracking-wide">
                                Manage
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-100">
                            <div className="space-y-6">
                                {ownerProperties.map((property) => (
                                    <div key={property.id} className="group cursor-pointer">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 rounded-sm overflow-hidden shrink-0 relative">
                                                <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-serif font-medium truncate group-hover:text-indigo-600 transition-colors">{property.name}</h4>
                                                <p className="text-xs text-slate-500 mt-1 truncate">{property.location}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                    <span className="text-xs text-slate-400 font-medium">Live</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Link to="/owner/properties" className="block text-center py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-sm text-sm font-medium transition-colors mt-6">
                                    View All Properties
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8 bg-indigo-50 border border-indigo-100 p-6 rounded-sm">
                            <h3 className="font-serif text-lg text-indigo-900 mb-4">Concierge Support</h3>
                            <p className="text-indigo-700/80 text-sm mb-4 leading-relaxed">
                                Need help optimizing your listing? Our expert curation team is available 24/7.
                            </p>
                            <button className="text-indigo-900 font-bold text-sm underline hover:no-underline">Chat with Support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
