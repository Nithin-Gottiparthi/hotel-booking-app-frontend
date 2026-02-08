// Common amenities for filtering

export const amenities = [
    // Basic Amenities
    { id: 'wifi', name: 'WiFi', category: 'Basic', icon: '📶' },
    { id: 'ac', name: 'AC', category: 'Basic', icon: '❄️' },
    { id: 'tv', name: 'TV', category: 'Basic', icon: '📺' },
    { id: 'parking', name: 'Parking', category: 'Basic', icon: '🅿️' },
    { id: 'power-backup', name: 'Power Backup', category: 'Basic', icon: '🔋' },

    // Kitchen & Dining
    { id: 'kitchen', name: 'Kitchen', category: 'Kitchen', icon: '🍳' },
    { id: 'meals', name: 'Meals Included', category: 'Kitchen', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', category: 'Kitchen', icon: '🥐' },
    { id: 'restaurant', name: 'Restaurant', category: 'Kitchen', icon: '🍴' },
    { id: 'bar', name: 'Bar', category: 'Kitchen', icon: '🍷' },

    // Recreation
    { id: 'pool', name: 'Swimming Pool', category: 'Recreation', icon: '🏊' },
    { id: 'gym', name: 'Gym', category: 'Recreation', icon: '💪' },
    { id: 'spa', name: 'Spa', category: 'Recreation', icon: '💆' },
    { id: 'games', name: 'Outdoor Games', category: 'Recreation', icon: '🎮' },
    { id: 'garden', name: 'Garden', category: 'Recreation', icon: '🌳' },

    // Services
    { id: 'room-service', name: 'Room Service', category: 'Services', icon: '🛎️' },
    { id: 'laundry', name: 'Laundry', category: 'Services', icon: '🧺' },
    { id: 'housekeeping', name: 'Housekeeping', category: 'Services', icon: '🧹' },
    { id: 'caretaker', name: 'Caretaker', category: 'Services', icon: '👨‍🔧' },
    { id: 'security', name: '24/7 Security', category: 'Services', icon: '🔒' },

    // Special Features
    { id: 'beach-access', name: 'Beach Access', category: 'Special', icon: '🏖️' },
    { id: 'mountain-view', name: 'Mountain View', category: 'Special', icon: '⛰️' },
    { id: 'bbq', name: 'BBQ Area', category: 'Special', icon: '🍖' },
    { id: 'bonfire', name: 'Bonfire', category: 'Special', icon: '🔥' },
    { id: 'water-sports', name: 'Water Sports', category: 'Special', icon: '🚣' },
    { id: 'trekking', name: 'Trekking', category: 'Special', icon: '🥾' },

    // Pet & Family
    { id: 'pet-friendly', name: 'Pet Friendly', category: 'Family', icon: '🐕' },
    { id: 'kids-play-area', name: 'Kids Play Area', category: 'Family', icon: '🎪' },
    { id: 'baby-cot', name: 'Baby Cot', category: 'Family', icon: '👶' }
];

// Helper functions
export const getAmenitiesByCategory = (category) => {
    return amenities.filter(a => a.category === category);
};

export const getAmenityById = (id) => {
    return amenities.find(a => a.id === id);
};

export const getAmenityCategories = () => {
    return [...new Set(amenities.map(a => a.category))];
};

export const searchAmenities = (query) => {
    const lowerQuery = query.toLowerCase();
    return amenities.filter(a =>
        a.name.toLowerCase().includes(lowerQuery)
    );
};
