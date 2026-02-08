// Booking Success Page - "The Celebration"
import { useLocation, Link, Navigate } from 'react-router-dom';
import { Icons } from '../../components/ui/Icons';
import { useEffect } from 'react';

export default function BookingSuccess() {
    const location = useLocation();
    const { bookingId, property, checkIn, checkOut } = location.state || {};

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!bookingId) {
        return <Navigate to="/explore" />;
    }

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-2xl w-full px-6 text-center">

                {/* SUCCESS ICON */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 text-white rounded-full mb-8 shadow-2xl animate-bounce-slow">
                    <Icons.Check className="w-12 h-12" />
                </div>

                <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 animate-fade-in-up">
                    Your story begins.
                </h1>
                <p className="text-xl text-slate-500 mb-12 max-w-lg mx-auto leading-relaxed animate-fade-in-up-delay-1">
                    You're all set! A confirmation email is on its way to you. Get ready for an unforgettable experience at <span className="text-indigo-600 font-bold">{property.name}</span>.
                </p>

                {/* TICKET CARD */}
                <div className="bg-white p-8 rounded-lg shadow-xl border border-slate-100 mb-12 text-left relative overflow-hidden animate-fade-in-up-delay-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>

                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Booking Reference</p>
                            <p className="text-2xl font-mono font-bold text-slate-900">{bookingId}</p>
                        </div>
                        <div className="text-right">
                            <img src={property.images[0]} alt="Prop" className="w-16 h-16 rounded-sm object-cover shadow-sm" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Check-in</p>
                            <p className="text-lg font-serif text-slate-900 text-lg">
                                {new Date(checkIn).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                            </p>
                            <p className="text-sm text-slate-500">After 12:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Check-out</p>
                            <p className="text-lg font-serif text-slate-900">
                                {new Date(checkOut).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
                            </p>
                            <p className="text-sm text-slate-500">Before 11:00 AM</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
                    <Link
                        to="/my-bookings"
                        className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold shadow-lg shadow-indigo-200"
                    >
                        View My Trip
                    </Link>
                    <Link
                        to="/explore"
                        className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                    >
                        Explore More
                    </Link>
                </div>

            </div>
        </div>
    );
}
