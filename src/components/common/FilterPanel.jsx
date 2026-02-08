// Filter Panel Component

import { useState } from 'react';
import { PROPERTY_TYPES } from '../../api/properties';
import { amenities as allAmenities } from '../../api/amenities';
import Button from '../ui/Button';
import { Icons } from '../ui/Icons';

export default function FilterPanel({ onFilterChange, initialFilters = {} }) {
    const [filters, setFilters] = useState({
        type: initialFilters.type || '',
        city: initialFilters.city || '',
        minPrice: initialFilters.minPrice || '',
        maxPrice: initialFilters.maxPrice || '',
        guests: initialFilters.guests || '',
        amenities: initialFilters.amenities || [],
        sortBy: initialFilters.sortBy || ''
    });

    const handleChange = (field, value) => {
        const newFilters = { ...filters, [field]: value };
        setFilters(newFilters);
    };

    const handleAmenityToggle = (amenityName) => {
        const newAmenities = filters.amenities.includes(amenityName)
            ? filters.amenities.filter(a => a !== amenityName)
            : [...filters.amenities, amenityName];

        const newFilters = { ...filters, amenities: newAmenities };
        setFilters(newFilters);
    };

    const handleApply = () => {
        if (onFilterChange) {
            onFilterChange(filters);
        }
    };

    const handleReset = () => {
        const resetFilters = {
            type: '',
            city: '',
            minPrice: '',
            maxPrice: '',
            guests: '',
            amenities: [],
            sortBy: ''
        };
        setFilters(resetFilters);
        if (onFilterChange) {
            onFilterChange(resetFilters);
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
                <Icons.Filter className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-lg text-slate-900">Filters</h3>
            </div>

            {/* Property Type */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Property Type
                </label>
                <div className="relative">
                    <select
                        value={filters.type}
                        onChange={(e) => handleChange('type', e.target.value)}
                        className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none text-slate-700 font-medium transition-all hover:bg-slate-100"
                    >
                        <option value="">All Types</option>
                        {Object.values(PROPERTY_TYPES).map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
                        <Icons.ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* City */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Location
                </label>
                <div className="relative">
                    <div className="absolute left-3 top-3.5 text-slate-400">
                        <Icons.MapPin className="w-4 h-4" />
                    </div>
                    <input
                        type="text"
                        value={filters.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        placeholder="City or Area"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700 font-medium placeholder-slate-400 transition-all hover:bg-slate-100"
                    />
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Price Range
                </label>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={filters.minPrice}
                        onChange={(e) => handleChange('minPrice', e.target.value)}
                        placeholder="Min"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                    <span className="text-slate-400">-</span>
                    <input
                        type="number"
                        value={filters.maxPrice}
                        onChange={(e) => handleChange('maxPrice', e.target.value)}
                        placeholder="Max"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                </div>
            </div>

            {/* Guests */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Guests
                </label>
                <div className="relative">
                    <div className="absolute left-3 top-3 text-slate-400">
                        <Icons.Users className="w-4 h-4" />
                    </div>
                    <input
                        type="number"
                        value={filters.guests}
                        onChange={(e) => handleChange('guests', e.target.value)}
                        placeholder="Any"
                        min="1"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-700"
                    />
                </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Amenities
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {allAmenities.slice(0, 8).map((amenity) => (
                        <label key={amenity.id} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${filters.amenities.includes(amenity.name) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 bg-white group-hover:border-indigo-400'}`}>
                                {filters.amenities.includes(amenity.name) && <Icons.Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={filters.amenities.includes(amenity.name)}
                                onChange={() => handleAmenityToggle(amenity.name)}
                            />
                            <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                                {amenity.name}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
                <Button onClick={handleApply} fullWidth className="shadow-md hover:shadow-lg">
                    Show Results
                </Button>
                <button
                    onClick={handleReset}
                    className="w-full py-2 text-sm text-slate-500 hover:text-slate-800 font-medium transition-colors"
                >
                    Reset Filters
                </button>
            </div>
        </div>
    );
}
