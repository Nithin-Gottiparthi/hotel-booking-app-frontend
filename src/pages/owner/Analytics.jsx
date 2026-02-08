// Analytics Page - "The Growth"
import { useState } from 'react';
import { Icons } from '../../components/ui/Icons';

export default function Analytics() {
    const [timeRange, setTimeRange] = useState('month');

    const stats = {
        revenue: {
            current: 245000,
            previous: 198000,
            change: '+23.7%',
            trend: 'up'
        },
        bookings: {
            current: 48,
            previous: 42,
            change: '+14.3%',
            trend: 'up'
        },
        occupancy: {
            current: 78,
            previous: 72,
            change: '+8.3%',
            trend: 'up'
        },
        avgRating: {
            current: 4.7,
            previous: 4.5,
            change: '+4.4%',
            trend: 'up'
        }
    };

    const topProperties = [
        { name: 'Sunset Villa Farmhouse', revenue: 85000, bookings: 15, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop' },
        { name: 'Grand Plaza Hotel', revenue: 72000, bookings: 18, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop' },
        { name: 'Cozy PG Accommodation', revenue: 48000, bookings: 10, image: 'https://images.unsplash.com/photo-1555854877-bab0e56f4d89?q=80&w=2069&auto=format&fit=crop' }
    ];

    const recentBookings = [
        { date: '2026-02-05', property: 'Sunset Villa', amount: 12000, status: 'Confirmed', guest: 'Sarah M.' },
        { date: '2026-02-04', property: 'Grand Plaza', amount: 8500, status: 'Confirmed', guest: 'David K.' },
        { date: '2026-02-03', property: 'Cozy PG', amount: 5000, status: 'Completed', guest: 'Rahul S.' },
        { date: '2026-02-02', property: 'Beach Resort', amount: 15000, status: 'Confirmed', guest: 'Priya J.' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-2 block">Performance Overview</span>
                            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                                The Growth
                            </h1>
                            <p className="text-slate-400 mt-2">Tracking performance across your portfolio.</p>
                        </div>

                        {/* Time Range Selector */}
                        <div className="bg-white/10 p-1 rounded-sm flex">
                            {['week', 'month', 'year'].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => setTimeRange(range)}
                                    className={`
                                        px-6 py-2 rounded-sm font-medium text-sm transition-all capitalize
                                        ${timeRange === range
                                            ? 'bg-white text-slate-900 shadow-sm'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }
                                    `}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { label: 'Total Revenue', value: `₹${(stats.revenue.current / 1000).toFixed(1)}K`, sub: 'Gross earnings' },
                            { label: 'Total Bookings', value: stats.bookings.current, sub: 'Confirmed stays' },
                            { label: 'Occupancy Rate', value: `${stats.occupancy.current}%`, sub: 'Average occupancy' },
                            { label: 'Avg Rating', value: stats.avgRating.current, sub: 'Guest satisfaction', isRating: true }
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm backdrop-blur-sm">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                                <div className="flex items-end gap-3">
                                    <p className="text-3xl font-serif font-bold text-white">
                                        {stat.value} {stat.isRating && <span className="text-yellow-500 text-xl">★</span>}
                                    </p>
                                    <span className="text-green-400 text-xs font-bold mb-1.5 flex items-center">
                                        <Icons.ChevronRight className="w-3 h-3 -rotate-45" /> 12%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* LEFT COLUMN: Charts & Top Properties */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Revenue Trend (Mock Chart) */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-serif">Revenue Trajectory</h2>
                                <button className="text-sm font-bold text-slate-400 uppercase tracking-wider hover:text-slate-600">Download Report</button>
                            </div>

                            {/* CSS Bar Chart Placeholder */}
                            <div className="h-64 flex items-end justify-between gap-2 px-2">
                                {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 95].map((h, i) => (
                                    <div key={i} className="w-full bg-indigo-50 hover:bg-indigo-100 transition-colors relative group rounded-t-sm">
                                        <div
                                            style={{ height: `${h}%` }}
                                            className="absolute bottom-0 w-full bg-slate-900 group-hover:bg-indigo-600 transition-all duration-500 rounded-t-sm"
                                        ></div>
                                        {/* Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            ₹{(h * 1.5).toFixed(1)}k
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                <span>Jan</span><span>Dec</span>
                            </div>
                        </div>

                        {/* Recent Bookings Table */}
                        <div className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                                <h2 className="text-xl font-serif">Recent Activity</h2>
                                <Link to="/owner/bookings" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">View All</Link>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {recentBookings.map((booking, index) => (
                                    <div key={index} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                                <Icons.User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{booking.guest}</p>
                                                <p className="text-xs text-slate-500">{booking.property} • {new Date(booking.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-serif font-bold text-slate-900">₹{booking.amount.toLocaleString()}</p>
                                            <span className="text-[10px] uppercase tracking-wider font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-1">
                                                {booking.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Top Performers */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900 text-white p-8 rounded-sm sticky top-8">
                            <h2 className="text-2xl font-serif mb-6">Top Performers</h2>
                            <div className="space-y-8">
                                {topProperties.map((property, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-indigo-400 text-xs font-bold tracking-widest">0{index + 1}</span>
                                            <span className="text-white font-serif">₹{(property.revenue / 1000).toFixed(0)}K</span>
                                        </div>

                                        <div className="flex gap-4 items-center">
                                            <div className="w-16 h-12 rounded-sm overflow-hidden bg-slate-800">
                                                <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium leading-tight group-hover:text-indigo-300 transition-colors">{property.name}</h4>
                                                <p className="text-xs text-slate-500 mt-1">{property.bookings} bookings</p>
                                            </div>
                                        </div>
                                        {index < topProperties.length - 1 && <div className="h-px bg-white/10 mt-6" />}
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm font-medium text-sm transition-colors">
                                Enhance Portfolio
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Add Link to import
import { Link } from 'react-router-dom';
