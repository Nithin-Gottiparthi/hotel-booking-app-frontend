// My Bookings Page

import { useState } from 'react';
import { getBookingsByUserId } from '../../api/bookings';
import { useAuth } from '../../context/AuthContext';
import BookingCard from '../../components/ui/BookingCard';

export default function MyBookings() {
    const { user } = useAuth();
    const [filter, setFilter] = useState('all'); // all, upcoming, past, cancelled

    const allBookings = user ? getBookingsByUserId(user.id) : [];

    const filteredBookings = allBookings.filter(booking => {
        const today = new Date().toISOString().split('T')[0];

        switch (filter) {
            case 'upcoming':
                return booking.checkIn >= today && booking.status !== 'Cancelled';
            case 'past':
                return booking.checkOut < today;
            case 'cancelled':
                return booking.status === 'Cancelled';
            default:
                return true;
        }
    });

    const handleCancelBooking = (bookingId) => {
        // In a real app, this would call an API
        alert(`Booking ${bookingId} cancellation requested (dummy action)`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

                {/* Filter Tabs */}
                <div className="bg-white rounded-xl p-2 shadow-sm mb-8 flex gap-2">
                    {[
                        { value: 'all', label: 'All Bookings' },
                        { value: 'upcoming', label: 'Upcoming' },
                        { value: 'past', label: 'Past' },
                        { value: 'cancelled', label: 'Cancelled' }
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setFilter(tab.value)}
                            className={`
                flex-1 px-4 py-2 rounded-lg font-medium transition-colors
                ${filter === tab.value
                                    ? 'bg-indigo-600 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }
              `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Bookings List */}
                {filteredBookings.length > 0 ? (
                    <div className="space-y-6">
                        {filteredBookings.map((booking) => (
                            <BookingCard
                                key={booking.id}
                                booking={booking}
                                onCancel={handleCancelBooking}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <div className="text-6xl mb-4">📅</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No bookings found
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {filter === 'all'
                                ? "You haven't made any bookings yet."
                                : `No ${filter} bookings found.`
                            }
                        </p>
                        <a
                            href="/explore"
                            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                        >
                            Explore Properties
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
