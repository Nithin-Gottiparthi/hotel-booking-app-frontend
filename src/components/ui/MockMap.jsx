import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../ui/Icons';

export default function MockMap({ properties }) {
    const [hoveredId, setHoveredId] = useState(null);

    // 1. Calculate Bounding Box of our dummy properties
    // Default fallback if no properties
    const defaultBounds = { minLat: 10, maxLat: 35, minLng: 70, maxLng: 90 };

    const bounds = properties.length > 0 ? properties.reduce((acc, p) => {
        if (!p.coordinates) return acc;
        return {
            minLat: Math.min(acc.minLat, p.coordinates.lat),
            maxLat: Math.max(acc.maxLat, p.coordinates.lat),
            minLng: Math.min(acc.minLng, p.coordinates.lng),
            maxLng: Math.max(acc.maxLng, p.coordinates.lng),
        };
    }, { minLat: 999, maxLat: -999, minLng: 999, maxLng: -999 }) : defaultBounds;

    // Add padding to bounds so pins aren't on edge
    const latPadding = (bounds.maxLat - bounds.minLat) * 0.1 || 1;
    const lngPadding = (bounds.maxLng - bounds.minLng) * 0.1 || 1;

    const minLat = bounds.minLat - latPadding;
    const maxLat = bounds.maxLat + latPadding;
    const minLng = bounds.minLng - lngPadding;
    const maxLng = bounds.maxLng + lngPadding;

    // Helper: Convert Lat/Lng to % Position
    const getPosition = (coords) => {
        if (!coords) return { top: '50%', left: '50%' };
        // Map: Lat (Y axis) goes Up (Higher Value) -> CSS Top goes Down (Higher Value)
        // So MaxLat = 0% Top, MinLat = 100% Top
        const top = ((maxLat - coords.lat) / (maxLat - minLat)) * 100;
        const left = ((coords.lng - minLng) / (maxLng - minLng)) * 100;
        return { top: `${Math.max(5, Math.min(95, top))}%`, left: `${Math.max(5, Math.min(95, left))}%` };
    };

    return (
        <div className="relative w-full h-full bg-slate-100 overflow-hidden rounded-xl border border-slate-200 group">
            {/* Background Map Image - Abstract/Generic Map Style */}
            <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
                alt="Map View"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Map Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent pointer-events-none"></div>

            {/* Hint for interaction */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 shadow-sm z-10">
                Found {properties.length} stays
            </div>

            {/* Pins */}
            {properties.map((property) => {
                if (!property.coordinates) return null;
                const pos = getPosition(property.coordinates);
                const isHovered = hoveredId === property.id;

                return (
                    <div
                        key={property.id}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 hover:z-50 transition-all duration-300"
                        style={{ top: pos.top, left: pos.left }}
                        onMouseEnter={() => setHoveredId(property.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {/* Pin Bubble */}
                        <div className={`relative flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                            {/* Price Tag */}
                            <div className={`
                                px-3 py-1.5 rounded-full font-bold text-xs shadow-md border transition-colors 
                                ${isHovered ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-white text-slate-900 border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600'}
                            `}>
                                ₹{property.discountedPrice ? property.discountedPrice.toLocaleString() : property.price.toLocaleString()}
                            </div>

                            {/* Detailed Card Tooltip (Visible on Hover) */}
                            {isHovered && (
                                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up z-50">
                                    <div className="relative aspect-video">
                                        <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold">
                                            ⭐ {property.rating}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h4 className="font-bold text-slate-900 text-sm truncate">{property.name}</h4>
                                        <p className="text-xs text-slate-500 truncate mb-2">{property.location}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-indigo-600 text-sm">₹{property.price.toLocaleString()}</span>
                                            <Link to={`/property/${property.id}`} className="text-[10px] uppercase font-bold text-slate-400 hover:text-indigo-600">
                                                View &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Triangle Pointer */}
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 shadow-sm"></div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
