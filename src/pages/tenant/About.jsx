// About Page - "The Mission"
import { Icons } from '../../components/ui/Icons';

export default function About() {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-900">
            {/* HER0 - Pure Text */}
            <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-6 block">The Vibestey Promise</span>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                    We believe in the Art of <span className="italic text-slate-500">Belonging.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                    Vibestey isn’t just a booking platform. It’s a curator of memories, a connector of souls, and a guardian of your most precious moments.
                </p>
            </section>

            {/* IMAGE GRID - Editorial Style */}
            <section className="px-4 mb-32">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
                    <div className="col-span-12 md:col-span-8 h-[500px] overflow-hidden rounded-sm relative group">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                            alt="Luxury Hotel Lobby"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute bottom-6 left-6 text-white p-4 backdrop-blur-md bg-white/10 border border-white/20 max-w-sm">
                            <p className="font-serif italic text-lg">"Every space has a soul. We just help you find the one that speaks to yours."</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 h-[500px] flex flex-col gap-4">
                        <div className="h-1/2 overflow-hidden rounded-sm relative group">
                            <img
                                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
                                alt="Resort Pool"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="h-1/2 bg-slate-900 p-8 flex flex-col justify-center text-white rounded-sm">
                            <h3 className="text-4xl font-serif mb-2">10k+</h3>
                            <p className="text-slate-400 font-light">Happy travelers finding their home away from home.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-serif mb-8">Not just stays, but <br /><span className="italic text-indigo-600">Stories.</span></h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-xl">🌾</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Authentic Farmhouses</h3>
                                    <p className="text-slate-600 leading-relaxed">Reconnect with nature in our hand-picked farm stays that offer solitude and serenity.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-xl">🏩</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Curated Hotels</h3>
                                    <p className="text-slate-600 leading-relaxed">From boutique gems to grand palaces, experience hospitality that feels personal.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-xl">🎉</div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Seamless Events</h3>
                                    <p className="text-slate-600 leading-relaxed">We don’t just book venues; we set the stage for your life’s most cinematic moments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                            alt="Mission"
                            className="rounded-lg shadow-2xl skew-y-3 transform transition-transform hover:skew-y-0 duration-700"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl max-w-xs hidden md:block animate-fade-in-up">
                            <p className="font-serif text-xl italic text-slate-900 mb-4">"Vibestey transformed the way we travel. It felt less like a booking and more like an invitation."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Rohan M., Verified Traveler</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST SIGNALS */}
            <section className="py-32 px-6 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-16">Why the world trusts Vibestey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="group">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Icons.Check className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">100% Verified</h3>
                            <p className="text-slate-400 text-sm">Every listing is physically inspected.</p>
                        </div>
                        <div className="group">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Icons.Heart className="w-12 h-12 mx-auto" fill="currentColor" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Zero Hidden Fees</h3>
                            <p className="text-slate-400 text-sm">What you see is exactly what you pay.</p>
                        </div>
                        <div className="group">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Icons.User className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">24/7 Concierge</h3>
                            <p className="text-slate-400 text-sm">Real humans, ready to help anytime.</p>
                        </div>
                        <div className="group">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Icons.MapPin className="w-12 h-12 mx-auto" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Prime Locations</h3>
                            <p className="text-slate-400 text-sm">Only the best spots make the cut.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
