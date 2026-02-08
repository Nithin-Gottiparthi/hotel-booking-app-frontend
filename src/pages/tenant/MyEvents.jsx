// My Events Page

import { useAuth } from '../../context/AuthContext';
import { getEventBookingsByUserId } from '../../api/bookings';

export default function MyEvents() {
    const { user } = useAuth();
    const eventBookings = user ? getEventBookingsByUserId(user.id) : [];

    const getStatusColor = (status) => {
        const colors = {
            'Pending': 'bg-yellow-100 text-yellow-800',
            'Confirmed': 'bg-green-100 text-green-800',
            'Completed': 'bg-blue-100 text-blue-800',
            'Cancelled': 'bg-red-100 text-red-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Event Bookings</h1>

                {eventBookings.length > 0 ? (
                    <div className="space-y-6">
                        {eventBookings.map((booking) => (
                            <div key={booking.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{booking.eventName}</h3>
                                        <p className="text-gray-600">{booking.eventType}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                                        {booking.status}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Event Date</p>
                                        <p className="font-semibold text-gray-900">
                                            {new Date(booking.eventDate).toLocaleDateString('en-IN', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Guests</p>
                                        <p className="font-semibold text-gray-900">{booking.guests}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                                        <p className="font-semibold text-gray-900">₹{booking.totalPrice.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Payment</p>
                                        <p className={`font-semibold ${booking.paymentStatus === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                                            {booking.paymentStatus}
                                        </p>
                                    </div>
                                </div>

                                {booking.specialRequests && (
                                    <div className="pt-4 border-t">
                                        <p className="text-sm text-gray-600 mb-1">Special Requests</p>
                                        <p className="text-gray-700">{booking.specialRequests}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <div className="text-6xl mb-4">🎉</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No event bookings yet
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Browse our event management services to plan your next celebration
                        </p>
                        <a
                            href="/events"
                            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                        >
                            Explore Events
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
