// Saved Properties Page

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { properties } from '../../api/properties';
import PropertyCard from '../../components/ui/PropertyCard';

export default function SavedProperties() {
    const { user } = useAuth();
    const [savedIds] = useState(user?.savedProperties || []);

    const savedProperties = properties.filter(p => savedIds.includes(p.id));

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Properties</h1>
                <p className="text-gray-600 mb-8">
                    {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} saved
                </p>

                {savedProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedProperties.map((property) => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <div className="text-6xl mb-4">❤️</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No saved properties yet
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Start saving properties you like to easily find them later
                        </p>
                        <a
                            href="/explore"
                            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                        >
                            Explore Properties
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
