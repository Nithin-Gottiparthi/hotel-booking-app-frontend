// Property Details Page - The Memoir Layout
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPropertyById } from '../../api/properties';
import { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

import { Icons } from '../../components/ui/Icons';
import ReviewSection from '../../components/ui/ReviewSection';

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const property = getPropertyById(id);
    const [scrolled, setScrolled] = useState(false);

    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!property) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-serif mb-4">Story not found.</h2>
                    <Link to="/explore" className="text-indigo-400 hover:text-indigo-300 font-sans tracking-widest uppercase text-xs border-b border-indigo-400 pb-1">
                        Return to Collection
                    </Link>
                </div>
            </div>
        );
    }

    const handleBooking = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        navigate('/booking', { state: { property, ...bookingData } });
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans">

            {/* Immersive Hero - Full Viewport */}
            <header className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={property.images[0]}
                        alt={property.name}
                        className="w-full h-full object-cover animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                </div>

                <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm text-slate-900' : 'bg-transparent py-6 text-white'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        <Link to="/" className={`font-serif italic text-2xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>Vibestey</Link>
                        <Link to="/explore" className="text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
                            Back to Collection
                        </Link>
                    </div>
                </nav>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-20">
                    <div className="max-w-7xl mx-auto">
                        <span className="inline-block px-3 py-1 mb-6 border border-white/50 rounded-full text-white/80 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                            {property.type}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-none drop-shadow-lg animate-fade-in-up">
                            {property.name}
                        </h1>
                        <p className="text-white/90 text-xl font-light max-w-2xl flex items-center gap-2 animate-fade-in-up-delay-1">
                            <Icons.MapPin className="w-5 h-5" /> {property.location}
                        </p>
                    </div>
                </div>
            </header>

            {/* Narrative Content */}
            <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* The Story & Details (Left Col) */}
                <div className="lg:col-span-8 space-y-24">

                    {/* Intro / Abstract */}
                    <section>
                        <h2 className="font-serif italic text-4xl text-slate-900 mb-8">The Experience</h2>
                        <div className="prose prose-lg prose-slate text-slate-600 leading-loose first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
                            <p>{property.description}</p>
                        </div>
                    </section>

                    {/* Image Strip - Cinematic Interlude */}
                    <section className="grid grid-cols-2 gap-4">
                        <img src={property.images[1]} alt="Detail 1" className="w-full h-96 object-cover rounded-sm hover:scale-[1.02] transition-transform duration-700 grayscale hover:grayscale-0" />
                        <img src={property.images[2]} alt="Detail 2" className="w-full h-96 object-cover rounded-sm hover:scale-[1.02] transition-transform duration-700 grayscale hover:grayscale-0 mt-12" />
                    </section>

                    {/* Highlights / Features */}
                    <section className="bg-slate-100 p-12 -mx-6 md:-mx-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl mb-12 text-center">Curated Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                                {property.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center group">
                                        <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                                            <Icons.Check className="w-5 h-5" />
                                        </div>
                                        <span className="font-serif italic text-lg text-slate-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 text-9xl opacity-5 font-serif pointer-events-none">V</div>
                    </section>

                    {/* Review Section (New) */}
                    <ReviewSection property={property} />

                    {/* Host Section */}
                    <section className="flex items-center gap-8 py-12 border-t border-b border-slate-200">
                        <div className="w-24 h-24 bg-slate-200 rounded-full overflow-hidden">
                            {/* Host avatar placeholder */}
                            <img src={`https://ui-avatars.com/api/?name=${property.ownerName}&background=0D1117&color=fff`} alt={property.ownerName} />
                        </div>
                        <div>
                            <span className="text-slate-400 text-xs tracking-widest uppercase block mb-2">Your Host</span>
                            <h4 className="font-serif text-2xl text-slate-900">{property.ownerName}</h4>
                            <p className="text-slate-500 mt-2">"We believe in creating memories, not just providing a bed."</p>
                            <button className="mt-4 text-indigo-600 font-bold text-sm tracking-wider uppercase hover:text-indigo-800">
                                Contact Host
                            </button>
                        </div>
                    </section>
                </div>

                {/* Booking Widget (Sticky) */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-24">
                        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl p-8 rounded-none md:rounded-2xl">
                            <div className="flex justify-between items-baseline mb-8">
                                <span className="font-serif text-4xl text-slate-900">₹{property.price.toLocaleString()}</span>
                                <span className="text-slate-500 text-sm">per {property.priceUnit}</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                                        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Check-In</label>
                                        <input
                                            type="date"
                                            className="w-full bg-transparent text-sm focus:outline-none font-medium text-slate-700"
                                            value={bookingData.checkIn}
                                            onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                                        />
                                    </div>
                                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                                        <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Check-Out</label>
                                        <input
                                            type="date"
                                            className="w-full bg-transparent text-sm focus:outline-none font-medium text-slate-700"
                                            value={bookingData.checkOut}
                                            onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Guests</label>
                                    <select
                                        className="w-full bg-transparent text-sm focus:outline-none font-medium text-slate-700"
                                        value={bookingData.guests}
                                        onChange={(e) => setBookingData({ ...bookingData, guests: parseInt(e.target.value) })}
                                    >
                                        {[...Array(property.capacity.guests)].map((_, i) => (
                                            <option key={i} value={i + 1}>{i + 1} Guests</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <Button
                                onClick={handleBooking}
                                fullWidth
                                className="bg-slate-900 text-white font-serif italic text-lg py-4 hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                {isAuthenticated ? 'Begin Your Story' : 'Sign in to Book'}
                            </Button>

                            <p className="text-center text-xs text-slate-400 mt-4 tracking-wide">
                                You won't be charged yet
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
