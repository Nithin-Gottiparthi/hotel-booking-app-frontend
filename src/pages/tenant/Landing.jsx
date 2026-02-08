// Landing Page - The Travel Journal
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFeaturedProperties, PROPERTY_TYPES } from '../../api/properties';
import { getFeaturedEvents } from '../../api/events';
import { Icons } from '../../components/ui/Icons';

export default function Landing() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const featuredProperties = getFeaturedProperties(3);
    const featuredEvents = getFeaturedEvents(2);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePos({
            x: (clientX - window.innerWidth / 2) / 50,
            y: (clientY - window.innerHeight / 2) / 50,
        });
    };

    const handleSearch = (query) => {
        if (!query) return;
        navigate(`/explore?search=${encodeURIComponent(query)}`);
    };

    const categories = [
        // ... (categories array remains same)
        {
            type: PROPERTY_TYPES.FARMHOUSE,
            label: 'The Farmhouse',
            subtitle: 'Reconnect with nature',
            image:
                'https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=2071&auto=format&fit=crop',
        },
        {
            type: PROPERTY_TYPES.RESORT,
            label: 'The Resort',
            subtitle: 'Luxury redefined',
            image:
                'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
        },
        {
            type: PROPERTY_TYPES.HOTEL,
            label: 'The Hotel',
            subtitle: 'Urban sanctuary',
            image:
                'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        },
        {
            type: PROPERTY_TYPES.PG,
            label: 'The Community',
            subtitle: 'Shared stories',
            image:
                'https://images.unsplash.com/photo-1555854877-bab0e56f4d89?q=80&w=2069&auto=format&fit=crop',
        },
    ];

    const trendingDestinations = [
        { name: 'Manali, HP', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop', count: '45 stays' },
        { name: 'Goa, India', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2000&auto=format&fit=crop', count: '128 stays' },
        { name: 'Jaipur, RJ', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2000&auto=format&fit=crop', count: '67 stays' },
        { name: 'Lonavala, MH', image: 'https://images.unsplash.com/photo-1571235479619-3f74221dd725?q=80&w=2000&auto=format&fit=crop', count: '32 stays' },
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans overflow-x-hidden" onMouseMove={handleMouseMove}>
            {/* HERO - EDITORIAL COLLAGE */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                {/* Layer 0: Background Video with Mask */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-110 blur-[2px] opacity-40 brightness-50"
                    >
                        <source src="https://videos.pexels.com/video-files/3205779/3205779-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900" />
                </div>

                {/* Layer 1: Floating Elements (Parallax) */}
                <div
                    className="parallax-layer z-10 top-[20%] left-8 md:left-20 hidden lg:block"
                    style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
                >
                    <div className="w-56 h-72 md:w-64 md:h-80 bg-[url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000')] bg-cover rounded-2xl shadow-2xl border-4 border-white transform -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105" />
                </div>

                <div
                    className="parallax-layer z-10 bottom-[20%] right-8 md:right-20 hidden lg:block"
                    style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
                >
                    <div className="w-48 h-64 md:w-56 md:h-72 bg-[url('https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000')] bg-cover rounded-2xl shadow-2xl border-4 border-white transform rotate-12 transition-all duration-700 hover:rotate-3 hover:scale-110" />
                </div>

                {/* Decorative Elements */}
                <div
                    className="parallax-layer z-20 top-20 right-[15%]"
                    style={{ transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 3}px)` }}
                >
                    <Icons.Umbrella className="w-24 h-24 text-indigo-400 rotate-12 animate-float opacity-30" />
                </div>

                <div
                    className="parallax-layer z-20 bottom-32 left-[10%] hidden md:block"
                    style={{ transform: `translate(${-mousePos.x * 4}px, ${-mousePos.y * 4}px)` }}
                >
                    <div className="text-6xl text-white opacity-20 font-serif">XV</div>
                </div>

                {/* Layer 2: Core Typography & Search */}
                <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
                    <div className="mb-6 overflow-hidden">
                        <p className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base animate-fade-in-up">
                            EST. 2024 • THE PREMIUM COLLECTION
                        </p>
                    </div>

                    <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-serif leading-none mb-4 animate-fade-in-up delay-100">
                        Stay <span className="italic font-light">different.</span>
                    </h1>

                    <div className="relative mb-8 md:mb-12 animate-fade-in-up delay-200 flex justify-center">
                        <h2 className="text-white/90 text-3xl md:text-5xl lg:text-6xl font-script tracking-wide">
                            Every stay tells a story.
                        </h2>
                        {/* Underline Scribble */}
                        <div className="absolute -bottom-4 w-64 h-2 bg-indigo-500/30 rounded-full blur-sm" />
                    </div>

                    {/* REFINED SEARCH JOURNAL */}
                    <div className="max-w-4xl mx-auto animate-fade-in-up delay-300">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-2xl flex items-center transition-all duration-500 focus-within:bg-white group/search">
                            {/* Location */}
                            <div className="flex-1 px-6 md:px-8 border-r border-white/20 group-focus-within/search:border-slate-100 relative text-left">
                                <label className="text-[10px] font-bold text-white/60 group-focus-within/search:text-slate-500 uppercase tracking-wider block mb-0.5">Where</label>
                                <input
                                    type="text"
                                    placeholder="Search destinations"
                                    className="w-full bg-transparent text-white font-medium outline-none placeholder:text-white/40 focus:text-slate-900 group-focus-within/search:text-slate-800"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            {/* Dates (Mock) */}
                            <div className="hidden md:block flex-1 px-8 border-r border-white/20 group-focus-within/search:border-slate-100 text-left cursor-pointer">
                                <label className="text-[10px] font-bold text-white/60 group-focus-within/search:text-slate-500 uppercase tracking-wider block mb-0.5">When</label>
                                <div className="text-white/40 font-medium text-sm group-focus-within/search:text-slate-400">Add dates</div>
                            </div>

                            {/* Guests (Mock) */}
                            <div className="hidden md:block flex-1 px-8 text-left cursor-pointer">
                                <label className="text-[10px] font-bold text-white/60 group-focus-within/search:text-slate-500 uppercase tracking-wider block mb-0.5">Who</label>
                                <div className="text-white/40 font-medium text-sm group-focus-within/search:text-slate-400">Add guests</div>
                            </div>

                            {/* Search Button */}
                            <button
                                onClick={() => handleSearch(searchQuery)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-indigo-200 shrink-0 ml-2"
                            >
                                <Icons.Search className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Quick Tags */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {['Villas', 'Farmhouses', 'Wellness'].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleSearch(tag)}
                                    className="text-[10px] uppercase tracking-widest text-white/60 border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-slate-900 transition-all"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/40 animate-bounce">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll Down</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </div>
            </section>

            {/* TRENDING DESTINATIONS */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2 block">Trending Now</span>
                        <h2 className="text-3xl md:text-4xl font-serif">Popular Destinations</h2>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:border-slate-800 transition-colors"><Icons.ChevronLeft className="w-4 h-4" /></button>
                        <button className="w-10 h-10 border border-slate-800 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors"><Icons.ChevronRight className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {trendingDestinations.map((dest, idx) => (
                        <div key={idx} onClick={() => navigate(`/explore?search=${dest.name}`)} className="group cursor-pointer">
                            <div className="aspect-square rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg group-hover:shadow-xl transition-all">
                                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-serif text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">{dest.name}</h3>
                                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{dest.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">
                        Choose your <span className="italic text-slate-500">setting</span>
                    </h2>
                    <p className="max-w-md text-slate-600 text-sm leading-relaxed">
                        Curated collections for every kind of story.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, idx) => (
                        <div
                            key={cat.type}
                            onClick={() => navigate(`/explore?type=${cat.type}`)}
                            className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[16/9]"
                        >
                            <img
                                src={cat.image}
                                alt={cat.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-3xl font-serif italic mb-1">{cat.label}</h3>
                                <p className="text-white/80 text-sm font-medium tracking-wide bg-white/10 backdrop-blur-sm inline-block px-3 py-1 rounded-full">{cat.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US - Creative Redesign */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                {/* Abstract Shapes */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                        <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block px-3 py-1 bg-indigo-900/50 rounded-full border border-indigo-500/30">The Vibe Standard</span>
                        <h2 className="text-white text-5xl md:text-7xl font-serif mb-6 leading-tight">
                            Curated with <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">obsessive care</span>.
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            We are not an algorithm. We are a collective of travelers, designers, and dreamers. Every property on Vibestey is verified for soul, style, and substance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Icons.Sparkles, title: 'Hand-Picked', desc: 'We reject 95% of applicants. Only the truly exceptional, design-led havens make the cut.' },
                            { icon: Icons.Shield, title: 'Verified Reality', desc: 'No filters, no fish-eye lenses. We physically verify every property to ensure truth in advertising.' },
                            { icon: Icons.Headphones, title: '24/7 Concierge', desc: 'From last-minute anniversaries to medical emergencies, our human team is always on call.' },
                            { icon: Icons.Globe, title: 'Community Led', desc: 'Hosted by locals who know the secret trails, the best cafes, and the untold stories.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-2 duration-300">
                                <div className="w-14 h-14 bg-indigo-500/20 text-indigo-300 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-serif font-bold mb-3">{item.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/10 pt-4 mt-4 group-hover:border-white/20 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors group">
                            Read our full manifesto <Icons.ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURED PROPERTIES */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif">Featured Collections</h2>
                    <Link to="/explore" className="text-sm font-bold text-indigo-600 uppercase tracking-wide hover:text-indigo-800">View All</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {featuredProperties.map((prop) => (
                        <div key={prop.id} onClick={() => navigate(`/property/${prop.id}`)} className="group cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden mb-4 rounded-lg relative">
                                <img
                                    src={prop.images[0]}
                                    alt={prop.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold uppercase tracking-wide shadow-sm">
                                    {prop.type}
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif group-hover:text-indigo-600 transition-colors mb-1">{prop.name}</h3>
                                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                                        <Icons.MapPin className="w-3 h-3" />
                                        {prop.location}
                                    </div>
                                </div>
                                <span className="text-lg font-serif font-bold">₹{prop.price.toLocaleString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* VIBE EXPERIENCES (Teaser) */}
            <section className="bg-slate-900 text-white py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">Beyond Stays</span>
                        <h2 className="text-white text-4xl font-serif">Vibe Experiences</h2>
                    </div>
                    <Link to="/events" className="text-sm font-bold border-b border-indigo-400 pb-1 hover:text-indigo-300">View All Services</Link>
                </div>

                {/* Horizontal Scroll Snap */}
                <div className="flex gap-6 overflow-x-auto pb-8 px-6 max-w-7xl mx-auto scrollbar-hide snap-x">
                    {[
                        { title: 'Weddings', img: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2000&auto=format&fit=crop' },
                        { title: 'Corporate Offsites', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2000&auto=format&fit=crop' },
                        { title: 'Photoshoots', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop' },
                        { title: 'Wellness Retreats', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop' },
                    ].map((item, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden relative group cursor-pointer snap-center">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <h3 className="text-2xl font-serif italic text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEW SECTION: THE JOURNAL (More Info & Content) */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
                    <div>
                        <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2 block">The Journal</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Traveler Stories</h2>
                    </div>
                    <p className="max-w-md text-slate-500 text-sm leading-relaxed text-right md:text-left">
                        Deep dives into destinations, interviews with hosts, and guides for the modern nomad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[600px] md:h-[500px]">
                    {/* Main Feature */}
                    <div className="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer">
                        <img
                            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop"
                            alt="Cinque Terre"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Destination Guide</span>
                            <h3 className="text-3xl md:text-4xl font-serif italic mb-2">The Silent Hills of Coorg</h3>
                            <p className="text-white/80 line-clamp-2 max-w-xl">Discovering coffee plantations, hidden waterfalls, and the art of doing absolutely nothing in Kodagu.</p>
                        </div>
                    </div>

                    {/* Sidebar Features */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <div className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer">
                            <img
                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
                                alt="Design"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h4 className="text-xl font-serif">Design Spotlight: Villa Alibaug</h4>
                                <span className="text-xs text-white/70 uppercase tracking-widest mt-2 block">Read Story</span>
                            </div>
                        </div>
                        <div className="flex-1 bg-indigo-50 rounded-3xl p-8 flex flex-col justify-center group cursor-pointer hover:bg-indigo-100 transition-colors relative overflow-hidden">
                            <Icons.Heart className="w-32 h-32 text-indigo-100 absolute -bottom-10 -right-10 transform rotate-12 group-hover:scale-110 transition-transform" />
                            <div className="relative z-10">
                                <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2 block">Community</span>
                                <h4 className="text-2xl font-serif text-slate-900 mb-3">Host of the Month: Rajesh & Meera</h4>
                                <p className="text-slate-600 text-sm mb-4">"We built this farmhouse to share our love for organic farming..."</p>
                                <span className="text-indigo-900 font-bold text-xs border-b border-indigo-900 pb-0.5 inline-block">Read Interview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WALL OF LOVE (Testimonials) */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Icons.Heart className="w-10 h-10 text-red-500 mx-auto mb-4 animate-bounce" fill="currentColor" />
                    <h2 className="text-4xl font-serif text-slate-900 mb-4">Wall of Love</h2>
                    <p className="text-slate-500">Stories from our community of 10,000+ travelers.</p>
                </div>

                <div className="columns-1 md:columns-3 gap-8 space-y-8">
                    {[
                        { text: "I've never seen a platform cureated with such taste. Every property feels like a movie set.", author: "Priya Menon", role: "Travel Blogger", img: "https://randomuser.me/api/portraits/women/44.jpg" },
                        { text: "The booking process was seamless, but the stay? Absolutely magical. The 'Vibe Standard' is real.", author: "Rahul Verma", role: "Architect", img: "https://randomuser.me/api/portraits/men/32.jpg" },
                        { text: "Finally, a site that understands that where you stay IS the destination. Vibestey is my go-to now.", author: "Sarah Jones", role: "Digital Nomad", img: "https://randomuser.me/api/portraits/women/68.jpg" },
                        { text: "Booked a farmhouse for our startup offsite. The concierge team handled everything—food, music, bonfires.", author: "Arjun Reddy", role: "Founder, TechFlow", img: "https://randomuser.me/api/portraits/men/86.jpg" },
                        { text: "Hidden gems galore! Found a treehouse in Kerala that wasn't listed anywhere else.", author: "Ananya Gupta", role: "Photographer", img: "https://randomuser.me/api/portraits/women/17.jpg" },
                        { text: "Customer support actually picks up the phone. That alone is five stars.", author: "David Chen", role: "Frequent Traveler", img: "https://randomuser.me/api/portraits/men/46.jpg" }
                    ].map((testi, i) => (
                        <div key={i} className="break-inside-avoid bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                            <div className="flex items-center gap-1 mb-4 text-indigo-500">
                                {[...Array(5)].map((_, j) => <Icons.Star key={j} className="w-4 h-4" fill="currentColor" />)}
                            </div>
                            <p className="text-slate-700 italic leading-relaxed mb-6">"{testi.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testi.img} alt={testi.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-white" />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testi.author}</h4>
                                    <span className="text-xs text-slate-400 uppercase tracking-wide">{testi.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* DOWNLOAD APP SECTION */}
            <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 relative z-10">
                    <div className="order-2 md:order-1">
                        <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block border border-indigo-500/30">Travel Smarter</span>
                        <h2 className="text-white text-4xl md:text-6xl font-serif mb-6 leading-tight">
                            Your itinerary,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">reimagined.</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-md">
                            No app store download needed. Add Vibestey to your home screen for instant access to bookings, offline maps, and concierge chat.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => navigate('/explore')} className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-slate-200 transition-colors shadow-lg hover:shadow-indigo-500/20">
                                <Icons.MapPin className="w-5 h-5" />
                                <span>Start Planning</span>
                            </button>
                        </div>
                    </div>

                    {/* Phone Mockup (CSS only) */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl flex flex-col overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

                            {/* Screen Content */}
                            <div className="flex-1 bg-slate-50 relative">
                                {/* Header */}
                                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600')] bg-cover relative">
                                    <div className="absolute inset-0 bg-black/30"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">Upcoming Trip</div>
                                        <h3 className="font-serif text-3xl">Goa Escape</h3>
                                        <p className="text-sm opacity-90">Aug 12 - Aug 15 • 2 Guests</p>
                                    </div>
                                </div>

                                {/* Timeline Content */}
                                <div className="p-5 space-y-4">
                                    {/* Item 1 */}
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                                            <Icons.Home className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Check-in • 2:00 PM</div>
                                            <div className="font-bold text-slate-900">Villa Alibaug</div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                            <Icons.Umbrella className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Activity • 5:30 PM</div>
                                            <div className="font-bold text-slate-900">Sunset Yacht Ride</div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center opacity-60">
                                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                            <Icons.Star className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase">Dinner • 8:00 PM</div>
                                            <div className="font-bold text-slate-900">The Fisherman's...</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Action */}
                                <div className="absolute bottom-6 right-6 w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-slate-900/40">
                                    <Icons.Plus className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION REFINEMENT (Small tweak for consistency) */}
            <section className="bg-slate-50 border-t border-slate-200 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-serif mb-4">Simple, Seamless, Secure.</h2>
                        <p className="text-slate-500">Your journey from browse to booking in three steps.</p>
                    </div>
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-300 -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            {[
                                { icon: Icons.Search, title: 'Discover', desc: 'Browse our editorial collections or search by vibe, destination, or amenities.' },
                                { icon: Icons.Calendar, title: 'Reserve', desc: 'Secure your dates instantly with our seamless, secure booking platform.' },
                                { icon: Icons.User, title: 'Experience', desc: 'Arrive, relax, and create memories. We handle the details, you live the story.' },
                            ].map((step, i) => (
                                <div key={i} className="bg-white/50 backdrop-blur-sm md:bg-transparent p-6 rounded-xl">
                                    <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-100 z-10 relative">
                                        <step.icon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-2 text-slate-900">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl p-12 text-center relative overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-200/50 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-300/50 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-indigo-950">Join the Inner Circle</h2>
                        <p className="text-indigo-800/80 mb-8 max-w-lg mx-auto">
                            Get exclusive access to secret drops, flash sales on luxury stays, and travel journals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-6 py-4 rounded-full border border-indigo-200 focus:border-indigo-600 outline-none bg-white"
                            />
                            <button className="px-8 py-4 bg-indigo-900 text-white font-bold rounded-full hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-indigo-400 mt-4">We respect your inbox. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
