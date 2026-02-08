// Calendar Page

import { useState } from 'react';
import { getUpcomingBookings } from '../../api/bookings';

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const upcomingBookings = getUpcomingBookings();

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Booking Calendar</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar Placeholder */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">February 2026</h2>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    ← Prev
                                </button>
                                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    Next →
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid Placeholder */}
                        <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg">
                            <p className="text-gray-500">📅 Calendar view would go here</p>
                        </div>
                    </div>
                </div>

                {/* Upcoming Bookings */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Bookings</h2>

                        <div className="space-y-4">
                            {upcomingBookings.slice(0, 5).map((booking) => (
                                <div key={booking.id} className="p-4 bg-gray-50 rounded-lg">
                                    <p className="font-semibold text-gray-900 mb-1">{booking.propertyName}</p>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {new Date(booking.checkIn).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short'
                                        })}
                                        {' - '}
                                        {new Date(booking.checkOut).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short'
                                        })}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">{booking.guests} guests</span>
                                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
