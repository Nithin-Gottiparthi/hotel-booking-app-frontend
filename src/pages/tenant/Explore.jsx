// Explore Page - Main Interface
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchProperties, PROPERTY_TYPES } from '../../api/properties';
import { amenities as allAmenities } from '../../api/amenities';
import PropertyCard from '../../components/ui/PropertyCard';
import FilterPanel from '../../components/common/FilterPanel';
import MockMap from '../../components/ui/MockMap';
import { Icons } from '../../components/ui/Icons';

export default function Explore() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [properties, setProperties] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMap, setShowMap] = useState(false);

    // Initial Filters state
    const [filters, setFilters] = useState({
        type: searchParams.get('type') || '',
        city: searchParams.get('city') || searchParams.get('search') || '',
        minPrice: '',
        maxPrice: '',
        guests: '',
        amenities: [],
        sortBy: ''
    });

    // Detect Scroll for Sticky Header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fetch Properties based on filters
    useEffect(() => {
        const results = searchProperties(filters);
        setProperties(results);
    }, [filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Category Icons Map
    const categoryIcons = {
        [PROPERTY_TYPES.FARMHOUSE]: Icons.Home,
        [PROPERTY_TYPES.RESORT]: Icons.Umbrella,
        [PROPERTY_TYPES.HOTEL]: Icons.Building,
        [PROPERTY_TYPES.PG]: Icons.Users,
    };

    return (
        <div className="min-h-screen bg-white">
            {/* STICKY TOP BAR */}
            <div className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md py-3' : 'py-5 border-b border-slate-100'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4">
                        {/* Compact Search Bar */}
                        <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group">
                            <div className="flex-[1.5] border-r border-slate-200 pr-4">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Where</label>
                                <input
                                    type="text"
                                    placeholder="Search destinations"
                                    className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder-slate-400 outline-none"
                                    value={filters.city}
                                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                                />
                            </div>
                            <div className="flex-1 px-4 border-r border-slate-200 hidden sm:block">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Dates</label>
                                <span className="text-sm font-medium text-slate-400">Add dates</span>
                            </div>
                            <div className="flex-1 px-4 hidden sm:block">
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">Who</label>
                                <span className="text-sm font-medium text-slate-400">Add guests</span>
                            </div>
                            <button className="bg-indigo-600 text-white rounded-full p-2.5 hover:bg-indigo-700 transition-colors">
                                <Icons.Search className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Filter Toggle Button - Visible only on mobile/tablet */}
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`lg:hidden flex items-center gap-2 px-4 py-2.5 border rounded-full font-medium text-sm transition-all ${isFilterOpen ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`}
                        >
                            <Icons.Filter className="w-4 h-4" />
                            <span className="hidden sm:inline">Filters</span>
                            {Object.values(filters).some(v => v.length > 0 && v !== filters.city) && (
                                <div className="w-2 h-2 rounded-full bg-indigo-500 ml-1"></div>
                            )}
                        </button>
                    </div>

                    {/* CATEGORY CAROUSEL (Visible when not scrolled or simplified when scrolled) */}
                    <div className={`mt-4 flex items-center justify-start md:justify-center gap-8 overflow-x-auto pb-2 scrollbar-hide transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden mt-0' : 'h-auto opacity-100'}`}>
                        <button
                            onClick={() => setFilters({ ...filters, type: '' })}
                            className={`flex flex-col items-center gap-2 min-w-max group cursor-pointer pb-2 border-b-2 transition-all ${filters.type === '' ? 'border-slate-900 opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300'}`}
                        >
                            <Icons.Grid className="w-6 h-6" />
                            <span className="text-xs font-bold whitespace-nowrap">All Themes</span>
                        </button>

                        {Object.values(PROPERTY_TYPES).map((type) => {
                            const Icon = categoryIcons[type] || Icons.Star;
                            return (
                                <button
                                    key={type}
                                    onClick={() => setFilters({ ...filters, type })}
                                    className={`flex flex-col items-center gap-2 min-w-max group cursor-pointer pb-2 border-b-2 transition-all ${filters.type === type ? 'border-indigo-600 opacity-100 text-indigo-600' : 'border-transparent opacity-60 hover:opacity-100 hover:border-slate-300 text-slate-600'}`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-xs font-bold whitespace-nowrap">{type}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-start gap-8">
                    {/* FILTERS SIDEBAR (Permanent on desktop, toggle on mobile) */}
                    <div className={`w-80 flex-shrink-0 transition-all duration-500 ease-in-out lg:translate-x-0 lg:opacity-100 lg:w-80 lg:block ${isFilterOpen ? 'translate-x-0 opacity-100 block' : '-translate-x-full opacity-0 w-0 hidden'}`}>
                        <FilterPanel
                            onFilterChange={handleFilterChange}
                            initialFilters={filters}
                        />
                    </div>

                    {/* MAIN CONTENT GRID */}
                    <div className="flex-1 relative">
                        {/* Results Header */}
                        {filters.city && (
                            <div className="mb-6">
                                <h1 className="text-2xl font-serif text-slate-900">
                                    Stays in <span className="italic text-indigo-600">{filters.city}</span>
                                </h1>
                                <p className="text-sm text-slate-500 mt-1">
                                    {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
                                </p>
                            </div>
                        )}

                        <div className={`flex gap-6 ${showMap ? 'h-[calc(100vh-200px)]' : ''}`}>
                            {/* Scrollable List Section */}
                            <div className={`${showMap ? 'w-full lg:w-3/5 overflow-y-auto pr-2 scrollbar-hide' : 'w-full'}`}>
                                {properties.length > 0 ? (
                                    <div className={`grid grid-cols-1 ${showMap ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'} gap-6`}>
                                        {properties.map((property) => (
                                            <div key={property.id} className="animate-fade-in-up">
                                                <PropertyCard property={property} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                                            <Icons.Search className="w-8 h-8 text-slate-300" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">No matches found</h3>
                                        <p className="text-slate-500 text-center max-w-xs mb-8">
                                            We couldn't find any properties matching your current filters. Try changing your search or removing some filters.
                                        </p>
                                        <button
                                            onClick={() => setFilters({
                                                type: '',
                                                city: '',
                                                minPrice: '',
                                                maxPrice: '',
                                                guests: '',
                                                amenities: [],
                                                sortBy: ''
                                            })}
                                            className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors"
                                        >
                                            Clear All Filters
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Map Section (Desktop Split) */}
                            {showMap && (
                                <div className="hidden lg:block w-2/5 h-full rounded-2xl overflow-hidden sticky top-0 shadow-inner">
                                    <MockMap properties={properties} />
                                </div>
                            )}
                        </div>

                        {/* Floating Toggle Button */}
                        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
                            <button
                                onClick={() => setShowMap(!showMap)}
                                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform font-bold text-sm tracking-wide"
                            >
                                {showMap ? (
                                    <>
                                        <Icons.Grid className="w-4 h-4" />
                                        Show List
                                    </>
                                ) : (
                                    <>
                                        <Icons.MapPin className="w-4 h-4" />
                                        Show Map
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
