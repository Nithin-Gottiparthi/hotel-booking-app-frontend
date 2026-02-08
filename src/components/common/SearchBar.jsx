// Search Bar Component

import { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = 'Search properties...' }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                    🔍
                </span>

                {query && (
                    <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="absolute right-16 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        ✕
                    </button>
                )}

                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-semibold"
                >
                    Search
                </button>
            </div>
        </form>
    );
}
