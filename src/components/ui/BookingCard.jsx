// Booking Card Component

import { Link } from 'react-router-dom';

export default function BookingCard({ booking, showActions = true, onCancel }) {
    const getStatusColor = (status) => {
        const colors = {
            'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
            'Confirmed': 'bg-green-100 text-green-800 border-green-200',
            'Completed': 'bg-blue-100 text-blue-800 border-blue-200',
            'Cancelled': 'bg-red-100 text-red-800 border-red-200',
            'Rejected': 'bg-gray-100 text-gray-800 border-gray-200'
        };
        return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {booking.propertyName}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {booking.propertyType} • Booking ID: {booking.id}
                    </p>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(booking.status)}`}>
                    {booking.status}
                </span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b">
                <div>
                    <p className="text-xs text-gray-500 mb-1">Check-in</p>
                    <p className="font-semibold text-gray-900">📅 {formatDate(booking.checkIn)}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 mb-1">Check-out</p>
                    <p className="font-semibold text-gray-900">📅 {formatDate(booking.checkOut)}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 mb-1">Guests</p>
                    <p className="font-semibold text-gray-900">👥 {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500 mb-1">Duration</p>
                    <p className="font-semibold text-gray-900">🌙 {booking.nights} {booking.nights === 1 ? 'Night' : 'Nights'}</p>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-xs text-gray-500 mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-indigo-600">
                        ₹{booking.totalPrice.toLocaleString()}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Payment</p>
                    <p className={`text-sm font-semibold ${booking.paymentStatus === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {booking.paymentStatus}
                    </p>
                </div>
            </div>

            {/* Special Requests */}
            {booking.specialRequests && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Special Requests</p>
                    <p className="text-sm text-gray-700">{booking.specialRequests}</p>
                </div>
            )}

            {/* Actions */}
            {showActions && (
                <div className="flex gap-3">
                    <Link
                        to={`/property/${booking.propertyId}`}
                        className="flex-1 text-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
                    >
                        View Property
                    </Link>

                    {booking.status === 'Confirmed' && onCancel && (
                        <button
                            onClick={() => onCancel(booking.id)}
                            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                        >
                            Cancel Booking
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
