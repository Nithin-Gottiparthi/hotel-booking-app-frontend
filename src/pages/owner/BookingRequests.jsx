// Booking Requests Page

import { useState } from 'react';
import { getPendingBookings } from '../../api/bookings';

export default function BookingRequests() {
    const [bookings, setBookings] = useState(getPendingBookings());

    const handleApprove = (bookingId) => {
        alert(`Booking ${bookingId} approved (dummy action)`);
        setBookings(bookings.filter(b => b.id !== bookingId));
    };

    const handleReject = (bookingId) => {
        alert(`Booking ${bookingId} rejected (dummy action)`);
        setBookings(bookings.filter(b => b.id !== bookingId));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Requests</h1>
            <p className="text-gray-600 mb-8">{bookings.length} pending requests</p>

            {bookings.length > 0 ? (
                <div className="space-y-6">
                    {bookings.map((booking) => (
                        <div key={booking.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{booking.propertyName}</h3>
                                    <p className="text-gray-600">{booking.propertyType}</p>
                                </div>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                                    Pending
                                </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Guest Name</p>
                                    <p className="font-semibold text-gray-900">{booking.userName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Check-in</p>
                                    <p className="font-semibold text-gray-900">
                                        {new Date(booking.checkIn).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short'
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Check-out</p>
                                    <p className="font-semibold text-gray-900">
                                        {new Date(booking.checkOut).toLocaleDateString('en-IN', {
                                            day: 'numeric',
                                            month: 'short'
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Guests</p>
                                    <p className="font-semibold text-gray-900">{booking.guests}</p>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                                <p className="text-2xl font-bold text-indigo-600">₹{booking.totalPrice.toLocaleString()}</p>
                            </div>

                            {booking.specialRequests && (
                                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-sm font-semibold text-gray-900 mb-1">Special Requests</p>
                                    <p className="text-sm text-gray-700">{booking.specialRequests}</p>
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleApprove(booking.id)}
                                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                                >
                                    ✓ Approve
                                </button>
                                <button
                                    onClick={() => handleReject(booking.id)}
                                    className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                                >
                                    ✗ Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl p-12 text-center">
                    <div className="text-6xl mb-4">📥</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No pending requests
                    </h3>
                    <p className="text-gray-600">
                        All booking requests have been processed
                    </p>
                </div>
            )}
        </div>
    );
}
