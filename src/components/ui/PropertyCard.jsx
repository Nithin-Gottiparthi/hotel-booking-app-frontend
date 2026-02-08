import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export default function PropertyCard({ property }) {
    const getTypeBadgeColor = (type) => {
        const colors = {
            'Farmhouse': 'bg-green-50 text-green-800 border-green-200',
            'Hotel': 'bg-blue-50 text-blue-800 border-blue-200',
            'PG': 'bg-purple-50 text-purple-800 border-purple-200',
            'Resort': 'bg-rose-50 text-rose-800 border-rose-200'
        };
        return colors[type] || 'bg-slate-50 text-slate-700 border-slate-200';
    };

    return (
        <Link
            to={`/property/${property.id}`}
            className="group block bg-white rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold backdrop-blur-md shadow-sm ${getTypeBadgeColor(property.type)}`}>
                        {property.type}
                    </span>
                    {property.badges && property.badges.map((badge, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold bg-white/90 text-indigo-900 shadow-sm backdrop-blur-md">
                            {badge}
                        </span>
                    ))}
                </div>

                {/* Wishlist Button - Minimalist */}
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/30 backdrop-blur-sm transition-all text-white hover:text-red-400">
                    <Icons.Heart className="w-4 h-4" />
                </button>
            </div>

            {/* Content Container - Editorial Style */}
            <div className="pt-5 pb-3 px-2">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl text-slate-900 group-hover:text-indigo-800 transition-colors line-clamp-1 leading-tight">
                        {property.name}
                    </h3>
                    <div className="flex items-center gap-1 shrink-0">
                        <Icons.Star className="w-3 h-3 text-indigo-500" fill="currentColor" />
                        <span className="text-xs font-bold text-slate-700">{property.rating}</span>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs tracking-wide uppercase mb-3">
                    <Icons.MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{property.location}</span>
                </div>

                {/* Price Footer */}
                <div className="border-t border-slate-100 pt-3 flex items-baseline gap-2">
                    {property.discountedPrice ? (
                        <>
                            <span className="font-serif font-bold text-lg text-slate-900">
                                ₹{property.discountedPrice.toLocaleString()}
                            </span>
                            <span className="text-slate-400 text-xs line-through">
                                ₹{property.price.toLocaleString()}
                            </span>
                        </>
                    ) : (
                        <span className="font-serif font-bold text-lg text-slate-900">
                            ₹{property.price.toLocaleString()}
                        </span>
                    )}
                    <span className="text-slate-400 text-xs italic">
                        / {property.priceUnit}
                    </span>
                </div>
            </div>
        </Link>
    );
}
