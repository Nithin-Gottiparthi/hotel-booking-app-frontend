// Property Management Page - "The Gallery"
import { Link } from 'react-router-dom';
import { properties } from '../../api/properties';
import { useState } from 'react';
import { Icons } from '../../components/ui/Icons';

export default function PropertyManagement() {
    const [filter, setFilter] = useState('all');

    // In real app, filter by owner
    const ownerProperties = properties;

    const filteredProperties = filter === 'all'
        ? ownerProperties
        : ownerProperties.filter(p => p.type === filter);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-2 block">Portfolio</span>
                            <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                                The Gallery
                            </h1>
                            <p className="text-slate-500 mt-2">Managing {filteredProperties.length} active havens.</p>
                        </div>
                        <Link
                            to="/owner/properties/add"
                            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-colors font-medium shadow-lg shadow-slate-200"
                        >
                            <Icons.Plus className="w-4 h-4 mr-2" /> Create New
                        </Link>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mt-8 overflow-x-auto pb-2">
                        {['all', 'Farmhouse', 'Hotel', 'PG', 'Resort'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`
                                    px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap uppercase tracking-wide
                                    ${filter === type
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700'
                                    }
                                `}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map((property) => (
                        <div key={property.id} className="group bg-white rounded-sm overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={property.images[0]}
                                    alt={property.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                                    {property.type}
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white text-slate-900">
                                        <Icons.Heart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                        {property.name}
                                    </h3>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                                        <Icons.Star className="w-4 h-4 fill-current" />
                                        {property.rating}
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500 mb-6 flex items-center gap-1">
                                    <Icons.MapPin className="w-3 h-3" /> {property.location}
                                </p>

                                <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-sm font-medium text-slate-700">Detailed</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Price</p>
                                        <p className="text-sm font-serif font-bold text-slate-900">
                                            ₹{property.price.toLocaleString()}<span className="font-sans font-normal text-slate-400">/{property.priceUnit}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <Link
                                        to={`/owner/properties/edit/${property.id}`}
                                        className="flex-1 text-center px-4 py-3 border border-slate-200 text-slate-600 rounded-sm hover:bg-slate-50 hover:border-slate-300 transition-colors font-bold text-xs uppercase tracking-wider"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/property/${property.id}`}
                                        className="flex-1 text-center px-4 py-3 bg-slate-900 text-white rounded-sm hover:bg-slate-800 transition-colors font-bold text-xs uppercase tracking-wider icon-move-right"
                                    >
                                        View Live
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
