// Dummy data for event management services

export const EVENT_TYPES = {
    WEDDING: 'Wedding',
    CORPORATE: 'Corporate Event',
    BIRTHDAY: 'Birthday Party',
    ANNIVERSARY: 'Anniversary',
    CONFERENCE: 'Conference',
    SOCIAL: 'Social Gathering'
};

export const events = [
    {
        id: 'event-1',
        type: EVENT_TYPES.WEDDING,
        name: 'Royal Wedding Package',
        provider: 'Dream Events Co.',
        location: 'Mumbai, Maharashtra',
        city: 'Mumbai',
        description: 'Complete wedding planning and management service with venue decoration, catering, photography, and entertainment.',
        basePrice: 500000,
        priceUnit: 'event',
        capacity: {
            minGuests: 100,
            maxGuests: 500
        },
        services: [
            'Venue Decoration',
            'Catering (Veg & Non-Veg)',
            'Photography & Videography',
            'DJ & Entertainment',
            'Wedding Planner',
            'Floral Arrangements',
            'Lighting & Sound'
        ],
        images: [
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800'
        ],
        rating: 4.9,
        reviews: 145,
        providerId: 'provider-1',
        availability: true,
        duration: '1-3 days',
        advanceBooking: '3 months minimum'
    },
    {
        id: 'event-2',
        type: EVENT_TYPES.CORPORATE,
        name: 'Corporate Conference Package',
        provider: 'Elite Events',
        location: 'Bangalore, Karnataka',
        city: 'Bangalore',
        description: 'Professional corporate event management with AV equipment, catering, and venue setup.',
        basePrice: 150000,
        priceUnit: 'event',
        capacity: {
            minGuests: 50,
            maxGuests: 300
        },
        services: [
            'Venue Setup',
            'AV Equipment',
            'Projector & Screen',
            'Stage Setup',
            'Catering',
            'Registration Desk',
            'WiFi Setup'
        ],
        images: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'
        ],
        rating: 4.7,
        reviews: 89,
        providerId: 'provider-2',
        availability: true,
        duration: '1 day',
        advanceBooking: '1 month minimum'
    },
    {
        id: 'event-3',
        type: EVENT_TYPES.BIRTHDAY,
        name: 'Premium Birthday Celebration',
        provider: 'Party Perfect',
        location: 'Pune, Maharashtra',
        city: 'Pune',
        description: 'Memorable birthday party planning with theme decoration, entertainment, and catering.',
        basePrice: 50000,
        priceUnit: 'event',
        capacity: {
            minGuests: 20,
            maxGuests: 100
        },
        services: [
            'Theme Decoration',
            'Birthday Cake',
            'Catering',
            'Entertainment (Magician/DJ)',
            'Photography',
            'Return Gifts',
            'Games & Activities'
        ],
        images: [
            'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800',
            'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800'
        ],
        rating: 4.8,
        reviews: 67,
        providerId: 'provider-3',
        availability: true,
        duration: '4-6 hours',
        advanceBooking: '2 weeks minimum'
    },
    {
        id: 'event-4',
        type: EVENT_TYPES.ANNIVERSARY,
        name: 'Romantic Anniversary Package',
        provider: 'Celebrations Hub',
        location: 'Goa',
        city: 'Goa',
        description: 'Intimate anniversary celebration with romantic setup, dinner, and photography.',
        basePrice: 35000,
        priceUnit: 'event',
        capacity: {
            minGuests: 10,
            maxGuests: 50
        },
        services: [
            'Romantic Decoration',
            'Candlelight Dinner',
            'Live Music',
            'Photography',
            'Cake',
            'Floral Arrangements'
        ],
        images: [
            'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
            'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800'
        ],
        rating: 4.9,
        reviews: 54,
        providerId: 'provider-4',
        availability: true,
        duration: '1 day',
        advanceBooking: '1 month minimum'
    },
    {
        id: 'event-5',
        type: EVENT_TYPES.CONFERENCE,
        name: 'Tech Conference Setup',
        provider: 'TechEvents Pro',
        location: 'Hyderabad, Telangana',
        city: 'Hyderabad',
        description: 'Complete tech conference management with advanced AV, networking, and catering.',
        basePrice: 200000,
        priceUnit: 'event',
        capacity: {
            minGuests: 100,
            maxGuests: 500
        },
        services: [
            'Multi-track Setup',
            'Advanced AV',
            'Live Streaming',
            'Registration System',
            'Networking Area',
            'Catering',
            'Branding & Signage'
        ],
        images: [
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
            'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800'
        ],
        rating: 4.8,
        reviews: 43,
        providerId: 'provider-5',
        availability: true,
        duration: '1-2 days',
        advanceBooking: '2 months minimum'
    },
    {
        id: 'event-6',
        type: EVENT_TYPES.SOCIAL,
        name: 'Social Gathering Package',
        provider: 'Gather & Celebrate',
        location: 'Delhi',
        city: 'Delhi',
        description: 'Casual social event planning for get-togethers, reunions, and parties.',
        basePrice: 40000,
        priceUnit: 'event',
        capacity: {
            minGuests: 30,
            maxGuests: 150
        },
        services: [
            'Venue Setup',
            'Catering',
            'Music System',
            'Basic Decoration',
            'Photography',
            'Games & Activities'
        ],
        images: [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
            'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
        ],
        rating: 4.6,
        reviews: 78,
        providerId: 'provider-6',
        availability: true,
        advanceBooking: '3 weeks minimum'
    },
    // PHOTOGRAPHY & VIDEOGRAPHY
    {
        id: 'event-7',
        type: EVENT_TYPES.WEDDING,
        name: 'The Wedding Storytellers',
        provider: 'Pixel Perfect Studios',
        location: 'Mumbai, Maharashtra',
        city: 'Mumbai',
        description: 'Award-winning candid photography and cinematic wedding films. Capturing moments that last a lifetime.',
        basePrice: 150000,
        priceUnit: 'event',
        capacity: {
            minGuests: 50,
            maxGuests: 1000
        },
        services: [
            'Candid Photography',
            'Cinematic Video',
            'Drone Shoots',
            'Pre-wedding Shoot',
            'Same Day Edit',
            'Photo Albums'
        ],
        images: [
            'https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800',
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
            'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800'
        ],
        rating: 4.9,
        reviews: 210,
        providerId: 'provider-7',
        availability: true,
        duration: '1-3 days',
        advanceBooking: '3 months minimum'
    },
    {
        id: 'event-8',
        type: EVENT_TYPES.BIRTHDAY,
        name: 'Kids Magic & Fun',
        provider: 'Magic World',
        location: 'Bangalore, Karnataka',
        city: 'Bangalore',
        description: 'Complete entertainment package for kids birthday parties with magic shows, balloon twisting, and games.',
        basePrice: 15000,
        priceUnit: 'event',
        capacity: {
            minGuests: 10,
            maxGuests: 50
        },
        services: [
            'Magic Show',
            'Balloon Sculpting',
            'Tattoo Artist',
            'Game Host',
            'Mascot Appearance'
        ],
        images: [
            'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
            'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800',
            'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800'
        ],
        rating: 4.7,
        reviews: 120,
        providerId: 'provider-8',
        availability: true,
        duration: '3 hours',
        advanceBooking: '1 week minimum'
    },

    // CATERING
    {
        id: 'event-9',
        type: EVENT_TYPES.SOCIAL,
        name: 'Gourmet Catering Service',
        provider: 'Taste of India',
        location: 'Delhi',
        city: 'Delhi',
        description: 'Premium outdoor catering for social gatherings and house parties. Multi-cuisine menus available.',
        basePrice: 800,
        priceUnit: 'per plate',
        capacity: {
            minGuests: 25,
            maxGuests: 500
        },
        services: [
            'Buffet Setup',
            'Live Counters',
            'Bartending Service',
            'Waitstaff',
            'Crockery & Cutlery'
        ],
        images: [
            'https://images.unsplash.com/photo-1555244168-bd76c915a340?w=800',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800'
        ],
        rating: 4.5,
        reviews: 350,
        providerId: 'provider-9',
        availability: true,
        duration: '4-6 hours',
        advanceBooking: '2 weeks minimum'
    },

    // DECOR
    {
        id: 'event-10',
        type: EVENT_TYPES.WEDDING,
        name: 'Floral Dreams Decor',
        provider: 'Blooms & Petals',
        location: 'Hyderabad, Telangana',
        city: 'Hyderabad',
        description: 'Breathtaking floral decorations for weddings and engagements. Mandap, stage, and entrance decor.',
        basePrice: 75000,
        priceUnit: 'event',
        capacity: {
            minGuests: 100,
            maxGuests: 2000
        },
        services: [
            'Mandap Decor',
            'Flower Rangoli',
            'Car Decoration',
            'Stage Backdrop',
            'Centerpieces'
        ],
        images: [
            'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800',
            'https://images.unsplash.com/photo-1507504031981-baf88bc9debb?w=800',
            'https://images.unsplash.com/photo-1522673607200-1645062cd958?w=800'
        ],
        rating: 4.8,
        reviews: 95,
        providerId: 'provider-10',
        availability: true,
        duration: '1 day',
        advanceBooking: '1 month minimum'
    },

    // ENTERTAINMENT
    {
        id: 'event-11',
        type: EVENT_TYPES.CORPORATE,
        name: 'Corporate Team Bonding',
        provider: 'Team Builders',
        location: 'Pune, Maharashtra',
        city: 'Pune',
        description: 'Engaging team building workshops and offsite activities designed to boost morale and collaboration.',
        basePrice: 25000,
        priceUnit: 'event',
        capacity: {
            minGuests: 10,
            maxGuests: 100
        },
        services: [
            'Outdoor Activities',
            'Leadership Workshop',
            'Problem Solving Games',
            'Host/Facilitator',
            'Prizes & Certs'
        ],
        images: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800'
        ],
        rating: 4.6,
        reviews: 40,
        providerId: 'provider-11',
        availability: true,
        duration: '4-8 hours',
        advanceBooking: '2 weeks minimum'
    },
    {
        id: 'event-12',
        type: EVENT_TYPES.SOCIAL,
        name: 'DJ Maxx Night',
        provider: 'DJ Maxx',
        location: 'Goa',
        city: 'Goa',
        description: 'High-energy DJ performance for parties, weddings, and club nights. Bollywood, EDM, and Commercial.',
        basePrice: 20000,
        priceUnit: 'event',
        capacity: {
            minGuests: 50,
            maxGuests: 500
        },
        services: [
            'Live DJ Set',
            'Sound System',
            'Dance Floor Lights',
            'Smoke Machine',
            'Microphone'
        ],
        images: [
            'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800',
            'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=800',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800'
        ],
        rating: 4.7,
        reviews: 180,
        providerId: 'provider-12',
        availability: true,
        duration: '4 hours',
        advanceBooking: '2 weeks minimum'
    },

    // MORE WEDDING
    {
        id: 'event-13',
        type: EVENT_TYPES.WEDDING,
        name: 'Vintage Car Rental',
        provider: 'Classic Rides',
        location: 'Jaipur, Rajasthan',
        city: 'Jaipur',
        description: 'Rent luxury vintage cars for wedding processions and photoshoots. Arrive in style.',
        basePrice: 30000,
        priceUnit: 'day',
        capacity: {
            minGuests: 1,
            maxGuests: 4
        },
        services: [
            'Chauffeur Driven',
            'Car Decoration',
            'Fuel Included',
            '4 Hours Usage',
            'Photoshoot Access'
        ],
        images: [
            'https://images.unsplash.com/photo-1532986877088-297eb092c242?w=800',
            'https://images.unsplash.com/photo-1549448405-f938c5387431?w=800',
            'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800'
        ],
        rating: 4.9,
        reviews: 55,
        providerId: 'provider-13',
        availability: true,
        duration: '4-8 hours',
        advanceBooking: '1 month minimum'
    },
    {
        id: 'event-14',
        type: EVENT_TYPES.ANNIVERSARY,
        name: 'Private Yacht Party',
        provider: 'Sea Kings',
        location: 'Mumbai, Maharashtra',
        city: 'Mumbai',
        description: 'Exclusive yacht party sailing from Gateway of India. Perfect for anniversaries and intimate gatherings.',
        basePrice: 45000,
        priceUnit: 'hour',
        capacity: {
            minGuests: 2,
            maxGuests: 15
        },
        services: [
            'Private Yacht',
            'Captain & Crew',
            'Music System',
            'Snacks & Drinks',
            'Sunset View'
        ],
        images: [
            'https://images.unsplash.com/photo-1569263979104-d02f5e3ba312?w=800',
            'https://images.unsplash.com/photo-1605281317010-fe5ffe79ba0f?w=800',
            'https://images.unsplash.com/photo-1482103503253-29a3a9cf3e4c?w=800'
        ],
        rating: 4.8,
        reviews: 30,
        providerId: 'provider-14',
        availability: true,
        duration: '2-4 hours',
        advanceBooking: '1 week minimum'
    },
    {
        id: 'event-15',
        type: EVENT_TYPES.CONFERENCE,
        name: 'Executive Transport',
        provider: 'CorpCabs',
        location: 'Bangalore, Karnataka',
        city: 'Bangalore',
        description: 'Luxury transport fleet for conference delegates. Airport pickups and venue transfers.',
        basePrice: 25000,
        priceUnit: 'day',
        capacity: {
            minGuests: 1,
            maxGuests: 100
        },
        services: [
            'Luxury Sedans',
            'Professional Drivers',
            'Route Planning',
            'Refreshments in Car',
            '24/7 Support'
        ],
        images: [
            'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
            'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
            'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800'
        ],
        rating: 4.5,
        reviews: 110,
        providerId: 'provider-15',
        availability: true,
        duration: '1-5 days',
        advanceBooking: '1 week minimum'
    },
    {
        id: 'event-16',
        type: EVENT_TYPES.SOCIAL,
        name: 'Stand-up Comedy Night',
        provider: 'Laugh Factory',
        location: 'Delhi',
        city: 'Delhi',
        description: 'Book a professional stand-up comedian for your private party or corporate event.',
        basePrice: 50000,
        priceUnit: 'event',
        capacity: {
            minGuests: 20,
            maxGuests: 500
        },
        services: [
            'Artist Management',
            '30-60 min Set',
            'Meet & Greet',
            'Custom Material',
            'Stage Presence'
        ],
        images: [
            'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800',
            'https://images.unsplash.com/photo-1525268323814-fa6d7cb0fc73?w=800',
            'https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800'
        ],
        rating: 4.6,
        reviews: 45,
        providerId: 'provider-16',
        availability: true,
        duration: '1 hour',
        advanceBooking: '1 month minimum'
    }
];

// Helper functions
export const getEventById = (id) => {
    return events.find(e => e.id === id);
};

export const getEventsByType = (type) => {
    return events.filter(e => e.type === type);
};

export const getEventsByCity = (city) => {
    return events.filter(e =>
        e.city.toLowerCase().includes(city.toLowerCase())
    );
};

export const searchEvents = (filters = {}) => {
    let results = [...events];

    if (filters.type) {
        results = results.filter(e => e.type === filters.type);
    }

    if (filters.city) {
        results = results.filter(e =>
            e.city.toLowerCase().includes(filters.city.toLowerCase())
        );
    }

    if (filters.minPrice) {
        results = results.filter(e => e.basePrice >= filters.minPrice);
    }

    if (filters.maxPrice) {
        results = results.filter(e => e.basePrice <= filters.maxPrice);
    }

    if (filters.guests) {
        results = results.filter(e =>
            e.capacity.minGuests <= filters.guests &&
            e.capacity.maxGuests >= filters.guests
        );
    }

    // Sorting
    if (filters.sortBy === 'price-low') {
        results.sort((a, b) => a.basePrice - b.basePrice);
    } else if (filters.sortBy === 'price-high') {
        results.sort((a, b) => b.basePrice - a.basePrice);
    } else if (filters.sortBy === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
    }

    return results;
};

export const getFeaturedEvents = (limit = 4) => {
    return events
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};
