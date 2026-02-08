// Event Details Page

import { useParams, Link } from 'react-router-dom';
import { getEventById } from '../../api/events';
import ImageGallery from '../../components/ui/ImageGallery';
import Button from '../../components/ui/Button';

export default function EventDetails() {
    const { id } = useParams();
    const event = getEventById(id);

    if (!event) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Event not found</h2>
                    <Link to="/events" className="text-purple-600 hover:text-purple-700">
                        ← Back to Events
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-gray-600">
                    <Link to="/" className="hover:text-purple-600">Home</Link>
                    <span className="mx-2">›</span>
                    <Link to="/events" className="hover:text-purple-600">Events</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-900">{event.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Image Gallery */}
                        <ImageGallery images={event.images} alt={event.name} />

                        {/* Event Info */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full mb-3">
                                {event.type}
                            </span>

                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{event.name}</h1>

                            <div className="flex items-center gap-4 text-gray-600 mb-6">
                                <span className="flex items-center gap-1">
                                    <span>📍</span> {event.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <span className="text-yellow-500">⭐</span> {event.rating}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">About this service</h2>
                                <p className="text-gray-700 leading-relaxed">{event.description}</p>
                            </div>

                            {/* Capacity */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Event Capacity</h3>
                                <p className="text-gray-700">
                                    👥 {event.capacity.min} - {event.capacity.max} guests
                                </p>
                            </div>

                            {/* Services Included */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-3">Services Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {event.services.map((service, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-700">
                                            <span className="text-green-500">✓</span>
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Provider Info */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-2">Service Provider</h3>
                                <p className="text-gray-700">{event.provider}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-lg sticky top-20">
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 mb-1">Starting from</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-purple-600">
                                        ₹{(event.basePrice / 1000).toFixed(0)}K
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Customizable packages available</p>
                            </div>

                            <Button fullWidth size="lg" className="mb-4">
                                Request Quote
                            </Button>

                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Professional event planning</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Customizable packages</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>Experienced team</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>✓</span>
                                    <span>24/7 support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
