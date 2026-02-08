// Event Services Page - "The Social Hub"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { events, EVENT_TYPES } from '../../api/events';
import { Icons } from '../../components/ui/Icons';
import Button from '../../components/ui/Button';

export default function EventServices() {
    const [selectedType, setSelectedType] = useState('all');

    const filteredEvents = selectedType === 'all'
        ? events
        : events.filter(e => e.type === selectedType);

    const eventTypes = [
        { value: 'all', label: 'All Celebrations' },
        { value: EVENT_TYPES.WEDDING, label: 'Weddings' },
        { value: EVENT_TYPES.CORPORATE, label: 'Corporate' },
        { value: EVENT_TYPES.BIRTHDAY, label: 'Social Parties' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* HER0 SECTION */}
            <section className="relative h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                    alt="Celebration"
                    className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-white">
                    <span className="uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-indigo-200">
                        Vibestey Events
                    </span>
                    <h1 className="text-6xl md:text-7xl font-serif mb-6 leading-tight">
                        The <span className="italic text-indigo-300">Social</span> Hub
                    </h1>
                    <p className="text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                        Curating life's most important moments. From intimate gatherings to grand galas, find the perfect setting for your story.
                    </p>
                </div>
            </section>

            {/* TRUST & SAFETY SECTION */}
            <section className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-6 rounded-xl shadow-lg max-w-6xl md:mx-auto p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="px-4 py-2">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            🛡️
                        </div>
                        <h3 className="font-serif text-lg text-slate-900 mb-2">Verified Vendors</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Every trusted partner is vetted for quality, reliability, and excellence. We ensure your big day is in safe hands.
                        </p>
                    </div>
                    <div className="px-4 py-2">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            💎
                        </div>
                        <h3 className="font-serif text-lg text-slate-900 mb-2">Concierge Planning</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Unlock complimentary access to our event specialists who help tailor every detail to your vision.
                        </p>
                    </div>
                    <div className="px-4 py-2">
                        <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            💳
                        </div>
                        <h3 className="font-serif text-lg text-slate-900 mb-2">Secure Payments</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Book with confidence using our bank-grade encrypted payment protection. Your peace of mind is our priority.
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* FILTER TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {eventTypes.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => setSelectedType(type.value)}
                            className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${selectedType === type.value
                                ? 'bg-slate-900 text-white shadow-md transform scale-105'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-900 hover:text-slate-900'
                                }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>

                {/* EVENTS MASONRY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event) => (
                        <Link
                            key={event.id}
                            to={`/event/${event.id}`}
                            className="group relative block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={event.images[0]}
                                    alt={event.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
                                    {event.type}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-serif text-2xl text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                            {event.name}
                                        </h3>
                                        <p className="text-slate-500 text-sm flex items-center gap-1">
                                            <Icons.MapPin className="w-3 h-3" /> {event.location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                                        <Icons.Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        <span className="text-xs font-bold text-slate-700">{event.rating}</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {event.description}
                                </p>

                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                    <div className="text-xs text-slate-500">
                                        Starting from <br />
                                        <span className="text-lg font-serif text-slate-900">
                                            ₹{(event.basePrice / 1000).toFixed(0)}k
                                        </span>
                                    </div>
                                    <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest group-hover:underline">
                                        View Packages
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA SECTION */}
            <section className="bg-slate-900 text-white py-24 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Need a Custom Experience?</h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                        Our event concierges can help you build a bespoke package for your unique requirements.
                        From venue selection to catering, we handle it all.
                    </p>
                    <Button variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-indigo-50 border-none">
                        Talk to a Planner
                    </Button>
                </div>
            </section>
        </div>
    );
}
