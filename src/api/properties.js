// Dummy data for all property types

export const PROPERTY_TYPES = {
    FARMHOUSE: 'Farmhouse',
    HOTEL: 'Hotel',
    PG: 'PG',
    RESORT: 'Resort'
};

export const properties = [
    // FARMHOUSES
    {
        id: 'farm-1',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'Green Valley Farmhouse',
        location: 'Lonavala, Maharashtra',
        city: 'Lonavala',
        address: 'Khandala Road, Near Tiger Point',
        description: 'A beautiful farmhouse surrounded by lush greenery with a private pool, perfect for weekend getaways and family gatherings.',
        price: 8500,
        priceUnit: 'night',
        capacity: {
            guests: 12,
            bedrooms: 4,
            bathrooms: 3
        },
        coordinates: { lat: 18.7557, lng: 73.4091 }, // Lonavala
        badges: ['Guest Favorite', 'Rare Find'],
        discountedPrice: 7500,
        amenities: ['Private Pool', 'BBQ Area', 'Garden', 'Parking', 'WiFi', 'Kitchen', 'Caretaker'],
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800'
        ],
        rating: 4.8,
        reviews: 42,
        ownerId: 'owner-1',
        ownerName: 'Rajesh Kumar',
        availability: true,
        rules: ['No smoking indoors', 'No loud music after 10 PM', 'Pets allowed with prior notice'],
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'farm-2',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'Sunset Hills Farm',
        location: 'Karjat, Maharashtra',
        city: 'Karjat',
        address: 'Village Kondivade, Karjat',
        description: 'Spacious farmhouse with stunning sunset views, outdoor activities, and modern amenities for a perfect retreat.',
        price: 10000,
        priceUnit: 'night',
        capacity: {
            guests: 15,
            bedrooms: 5,
            bathrooms: 4
        },
        coordinates: { lat: 18.9102, lng: 73.3283 }, // Karjat
        badges: ['Superhost'],
        amenities: ['Swimming Pool', 'Outdoor Games', 'Bonfire Area', 'WiFi', 'AC Rooms', 'Kitchen', 'Parking'],
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
        ],
        rating: 4.9,
        reviews: 58,
        ownerId: 'owner-2',
        ownerName: 'Priya Sharma',
        availability: true,
        rules: ['No smoking', 'Maximum 15 guests', 'Security deposit required'],
        checkIn: '1:00 PM',
        checkOut: '12:00 PM'
    },

    // HOTELS
    {
        id: 'hotel-1',
        type: PROPERTY_TYPES.HOTEL,
        name: 'Grand Plaza Hotel',
        location: 'Mumbai, Maharashtra',
        city: 'Mumbai',
        address: 'Andheri East, Near Airport',
        description: 'Luxury hotel with modern amenities, rooftop restaurant, and excellent connectivity to business districts.',
        price: 4500,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        coordinates: { lat: 19.1136, lng: 72.8697 }, // Mumbai Airport
        badges: ['10% OFF'],
        discountedPrice: 4050,
        amenities: ['WiFi', 'AC', 'TV', 'Room Service', 'Gym', 'Restaurant', 'Bar', 'Parking'],
        images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800'
        ],
        rating: 4.5,
        reviews: 234,
        ownerId: 'owner-3',
        ownerName: 'Hotel Management Co.',
        availability: true,
        rules: ['Check-in ID required', 'No outside food', 'Smoking in designated areas only'],
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'hotel-2',
        type: PROPERTY_TYPES.HOTEL,
        name: 'Comfort Inn Suites',
        location: 'Pune, Maharashtra',
        city: 'Pune',
        address: 'Koregaon Park, Pune',
        description: 'Boutique hotel in the heart of Pune with personalized service and cozy rooms.',
        price: 3200,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['WiFi', 'AC', 'Breakfast', 'Parking', 'Laundry', 'TV'],
        images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
            'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
            'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'
        ],
        rating: 4.3,
        reviews: 156,
        ownerId: 'owner-4',
        ownerName: 'Amit Patel',
        availability: true,
        rules: ['Valid ID required', 'No pets', 'Quiet hours after 10 PM'],
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
    },

    // PGs (Paying Guest)
    {
        id: 'pg-1',
        type: PROPERTY_TYPES.PG,
        name: 'Student Haven PG',
        location: 'Bangalore, Karnataka',
        city: 'Bangalore',
        address: 'Koramangala 4th Block',
        description: 'Comfortable PG accommodation for students and working professionals with all modern facilities.',
        price: 8500,
        priceUnit: 'month',
        capacity: {
            guests: 1,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['WiFi', 'AC', 'Meals (3x)', 'Laundry', 'Housekeeping', 'Power Backup', 'Security'],
        images: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'
        ],
        rating: 4.6,
        reviews: 89,
        ownerId: 'owner-5',
        ownerName: 'Sunita Reddy',
        availability: true,
        rules: ['No opposite gender visitors after 9 PM', 'No smoking/alcohol', 'Notice period: 1 month'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },
    {
        id: 'pg-2',
        type: PROPERTY_TYPES.PG,
        name: 'Executive Residency PG',
        location: 'Hyderabad, Telangana',
        city: 'Hyderabad',
        address: 'Gachibowli, Near HITEC City',
        description: 'Premium PG for working professionals with modern amenities and excellent connectivity.',
        price: 12000,
        priceUnit: 'month',
        capacity: {
            guests: 1,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['WiFi', 'AC', 'Meals', 'Gym', 'Parking', 'Laundry', 'Housekeeping', 'Common Area'],
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
            'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800'
        ],
        rating: 4.7,
        reviews: 112,
        ownerId: 'owner-6',
        ownerName: 'Venkat Rao',
        availability: true,
        rules: ['Professional environment', 'Visitors allowed till 8 PM', 'Monthly rent advance'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },

    // RESORTS
    {
        id: 'resort-1',
        type: PROPERTY_TYPES.RESORT,
        name: 'Paradise Beach Resort',
        location: 'Goa',
        city: 'Goa',
        address: 'Calangute Beach Road',
        description: 'Beachfront resort with stunning ocean views, water sports, and world-class dining.',
        price: 12000,
        priceUnit: 'night',
        capacity: {
            guests: 3,
            bedrooms: 1,
            bathrooms: 1
        },
        coordinates: { lat: 15.5431, lng: 73.7632 }, // Goa Calangute
        badges: ['Beachfront'],
        amenities: ['Beach Access', 'Pool', 'Spa', 'Restaurant', 'Bar', 'WiFi', 'AC', 'Water Sports', 'Gym'],
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800'
        ],
        rating: 4.9,
        reviews: 287,
        ownerId: 'owner-7',
        ownerName: 'Coastal Resorts Ltd.',
        availability: true,
        rules: ['Check-in ID required', 'Beach rules apply', 'Damage deposit required'],
        checkIn: '3:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'resort-2',
        type: PROPERTY_TYPES.RESORT,
        name: 'Mountain View Resort',
        location: 'Manali, Himachal Pradesh',
        city: 'Manali',
        address: 'Old Manali Road',
        description: 'Serene mountain resort with breathtaking views, adventure activities, and cozy cottages.',
        price: 9500,
        priceUnit: 'night',
        capacity: {
            guests: 4,
            bedrooms: 2,
            bathrooms: 2
        },
        amenities: ['Mountain View', 'Bonfire', 'Restaurant', 'Trekking', 'WiFi', 'Heater', 'Parking'],
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
            'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
        ],
        rating: 4.8,
        reviews: 198,
        ownerId: 'owner-8',
        ownerName: 'Himalayan Retreats',
        availability: true,
        rules: ['Mountain safety rules apply', 'No littering', 'Respect local culture'],
        checkOut: '10:00 AM'
    },
    // FARMHOUSES (New)
    {
        id: 'farm-3',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'Mango Orchard Retreat',
        location: 'Ratnagiri, Maharashtra',
        city: 'Ratnagiri',
        address: 'Ratnagiri-Ganpatipule Road',
        description: 'Authentic Konkan experience in a 10-acre mango orchard. Enjoy fresh Alphonsos in season and traditional Konkani cuisine.',
        price: 6000,
        priceUnit: 'night',
        capacity: {
            guests: 8,
            bedrooms: 3,
            bathrooms: 3
        },
        amenities: ['Orchard Walk', 'Local Cuisine', 'Pet Friendly', 'Parking', 'Garden', 'Outdoor Sitout'],
        images: [
            'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800',
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'
        ],
        rating: 4.7,
        reviews: 28,
        ownerId: 'owner-9',
        ownerName: 'Suresh Patil',
        availability: true,
        rules: ['Alcohol allowed outdoors only', 'Quiet hours after 11 PM'],
        checkIn: '12:00 PM',
        checkOut: '10:00 AM'
    },
    {
        id: 'farm-4',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'The Stone House',
        location: 'Mulshi, Maharashtra',
        city: 'Mulshi',
        address: 'Tamhini Ghat Road',
        description: 'Rustic stone-walled cottage overlooking Mulshi Dam. Perfect for monsoon getaways and nature lovers.',
        price: 12000,
        priceUnit: 'night',
        capacity: {
            guests: 10,
            bedrooms: 4,
            bathrooms: 4
        },
        amenities: ['Lake View', 'Trekking', 'WiFi', 'BBQ', 'Projector'],
        images: [
            'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800'
        ],
        rating: 4.9,
        reviews: 75,
        ownerId: 'owner-1',
        ownerName: 'Rajesh Kumar',
        availability: true,
        rules: ['No loud music', 'Shoes off indoors'],
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'farm-5',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'River Side Cottage',
        location: 'Kolad, Maharashtra',
        city: 'Kolad',
        address: 'Kundalika River, Kolad',
        description: 'Charming wooden cottage right by the river. Ideal for rafting enthusiasts and those seeking riverside tranquility.',
        price: 7500,
        priceUnit: 'night',
        capacity: {
            guests: 6,
            bedrooms: 2,
            bathrooms: 2
        },
        amenities: ['River Access', 'Rafting', 'Bonfire', 'Kitchen', 'Pet Friendly'],
        images: [
            'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?w=800',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800',
            'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800'
        ],
        rating: 4.6,
        reviews: 34,
        ownerId: 'owner-9',
        ownerName: 'Deepak Deshmukh',
        availability: true,
        rules: ['Life jackets mandatory near river', 'No swimming at night'],
        checkIn: '1:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'farm-6',
        type: PROPERTY_TYPES.FARMHOUSE,
        name: 'Hilltop Villa',
        location: 'Mahabaleshwar, Maharashtra',
        city: 'Mahabaleshwar',
        address: 'Old Mahabaleshwar Road',
        description: 'Luxurious villa perched on a hill with panoramic valley views. Strawberry picking nearby.',
        price: 15000,
        priceUnit: 'night',
        capacity: {
            guests: 15,
            bedrooms: 5,
            bathrooms: 6
        },
        amenities: ['Valley View', 'Swimming Pool', 'Garden', 'Cook available', 'AC'],
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
        ],
        rating: 4.8,
        reviews: 60,
        ownerId: 'owner-2',
        ownerName: 'Priya Sharma',
        availability: true,
        rules: ['No parties', 'Families only'],
        checkIn: '2:00 PM',
        checkOut: '10:00 AM'
    },

    // HOTELS (New)
    {
        id: 'hotel-3',
        type: PROPERTY_TYPES.HOTEL,
        name: 'The Royal Heritage',
        location: 'Jaipur, Rajasthan',
        city: 'Jaipur',
        address: 'Civil Lines, Jaipur',
        description: 'Experience royalty in this heritage hotel with classic architecture and modern comforts.',
        price: 6500,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Spa', 'Pool', 'Fine Dining', 'Bar', 'Valet Parking', 'WiFi'],
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800'
        ],
        rating: 4.9,
        reviews: 312,
        ownerId: 'owner-3',
        ownerName: 'Heritage Hotels Group',
        availability: true,
        rules: ['Smart casual dress code for dinner', 'No pets'],
        checkIn: '2:00 PM',
        checkOut: '12:00 PM'
    },
    {
        id: 'hotel-4',
        type: PROPERTY_TYPES.HOTEL,
        name: 'Urban Pods',
        location: 'Mumbai, Maharashtra',
        city: 'Mumbai',
        address: 'Near Andheri Station',
        description: 'Modern capsule hotel for the budget traveler. Clean, compact, and futuristic.',
        price: 1500,
        priceUnit: 'night',
        capacity: {
            guests: 1,
            bedrooms: 1,
            bathrooms: 0 // Shared
        },
        amenities: ['WiFi', 'AC', 'Locker', 'Shared Washroom', 'Cafe'],
        images: [
            'https://images.unsplash.com/photo-1520279663-718872605481?w=800',
            'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'
        ],
        rating: 4.2,
        reviews: 450,
        ownerId: 'owner-4',
        ownerName: 'Smart Stays',
        availability: true,
        rules: ['Silent zone in pods', 'No eating inside pods'],
        checkIn: '2:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'hotel-5',
        type: PROPERTY_TYPES.HOTEL,
        name: 'Seaside Boutique',
        location: 'Kochi, Kerala',
        city: 'Kochi',
        address: 'Fort Kochi',
        description: 'Charming boutique hotel with colonial architecture and sea views.',
        price: 5000,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Sea View', 'Ayurvedic Spa', 'WiFi', 'Breakfast', 'Library'],
        images: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
            'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
            'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800'
        ],
        rating: 4.7,
        reviews: 120,
        ownerId: 'owner-3',
        ownerName: 'Kerala Harbours',
        availability: true,
        rules: ['No smoking', 'Conservation area'],
        checkIn: '12:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'hotel-6',
        type: PROPERTY_TYPES.HOTEL,
        name: 'Tech City Suites',
        location: 'Bangalore, Karnataka',
        city: 'Bangalore',
        address: 'Whitefield',
        description: 'Business hotel perfectly located for corporate travelers. Meeting rooms and high-speed internet included.',
        price: 4000,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Conference Room', 'Gym', 'High-Speed WiFi', 'Work Desk', 'Restaurant'],
        images: [
            'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800'
        ],
        rating: 4.4,
        reviews: 89,
        ownerId: 'owner-4',
        ownerName: 'BizStays',
        availability: true,
        rules: ['ID card mandatory', 'Corporate discounts available'],
        checkIn: '2:00 PM',
        checkOut: '12:00 PM'
    },

    // PGs (New)
    {
        id: 'pg-3',
        type: PROPERTY_TYPES.PG,
        name: 'Zolo Tech',
        location: 'Pune, Maharashtra',
        city: 'Pune',
        address: 'Hinjewadi Phase 1',
        description: 'Co-living space designed for IT professionals. Vibrant community and regular events.',
        price: 9000,
        priceUnit: 'month',
        capacity: {
            guests: 1,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Gaming Room', 'WiFi', 'Meals', 'Housekeeping', 'Gym'],
        images: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800',
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
        ],
        rating: 4.5,
        reviews: 150,
        ownerId: 'owner-6',
        ownerName: 'CoLive Group',
        availability: true,
        rules: ['No overnight guests', 'Access card entry'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },
    {
        id: 'pg-4',
        type: PROPERTY_TYPES.PG,
        name: 'Ladies Comfort PG',
        location: 'Delhi',
        city: 'Delhi',
        address: 'GTB Nagar',
        description: 'Safe and secure PG for female students. Close to university campus.',
        price: 7000,
        priceUnit: 'month',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['CCTV', 'Biometric Entry', 'Home Cooked Meals', 'WiFi', 'Laundry'],
        images: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800',
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800'
        ],
        rating: 4.8,
        reviews: 67,
        ownerId: 'owner-5',
        ownerName: 'Mrs. Kapoor',
        availability: true,
        rules: ['Curfew 9:30 PM', 'Female visitors only'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },
    {
        id: 'pg-5',
        type: PROPERTY_TYPES.PG,
        name: 'Elite Boys Hostel',
        location: 'Chennai, Tamil Nadu',
        city: 'Chennai',
        address: 'OMR Road',
        description: 'Premium hostel with single rooms and AC. Ideal for privacy seekers.',
        price: 11000,
        priceUnit: 'month',
        capacity: {
            guests: 1,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Single Occupancy', 'AC', 'Mess', 'High Speed Net', 'Parking'],
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
            'https://images.unsplash.com/photo-1505693043818-dce684c953eb?w=800',
            'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800'
        ],
        rating: 4.3,
        reviews: 45,
        ownerId: 'owner-6',
        ownerName: 'Murugan Rentals',
        availability: true,
        rules: ['Rent by 5th of month', 'No drinking'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },
    {
        id: 'pg-6',
        type: PROPERTY_TYPES.PG,
        name: 'Homely Stay PG',
        location: 'Kolkata, West Bengal',
        city: 'Kolkata',
        address: 'Salt Lake Sector V',
        description: 'A home away from home. Clean, simple, and affordable.',
        price: 5500,
        priceUnit: 'month',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Bengali Meals', 'WiFi', 'Aquaguard Water', '24/7 Water'],
        images: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
            'https://images.unsplash.com/photo-1484154218962-a1c00207099b?w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
        ],
        rating: 4.5,
        reviews: 32,
        ownerId: 'owner-5',
        ownerName: 'Mr. Das',
        availability: true,
        rules: ['Gate closes at 10:30 PM', 'Inform about meals in advance'],
        checkIn: 'Flexible',
        checkOut: 'Flexible'
    },

    // RESORTS (New)
    {
        id: 'resort-3',
        type: PROPERTY_TYPES.RESORT,
        name: 'Jungle Safari Lodge',
        location: 'Corbett, Uttarakhand',
        city: 'Corbett',
        address: 'Jim Corbett National Park Buffer Zone',
        description: 'Experience the wild in luxury. Safari packages and nature walks included.',
        price: 18000,
        priceUnit: 'night',
        capacity: {
            guests: 4,
            bedrooms: 2,
            bathrooms: 2
        },
        amenities: ['Jungle Safari', 'Pool', 'Bonfire', 'Buffet', 'Guide', 'AC Cottages'],
        images: [
            'https://images.unsplash.com/photo-1497500366663-e3801f01c77c?w=800',
            'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=800',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800'
        ],
        rating: 4.8,
        reviews: 210,
        ownerId: 'owner-7',
        ownerName: 'Wilderness Retreate',
        availability: true,
        rules: ['No loud noise (disturbs animals)', 'Flash photography restricted'],
        checkIn: '1:00 PM',
        checkOut: '11:00 AM'
    },
    {
        id: 'resort-4',
        type: PROPERTY_TYPES.RESORT,
        name: 'Desert Mirage Camp',
        location: 'Jaisalmer, Rajasthan',
        city: 'Jaisalmer',
        address: 'Sam Sand Dunes',
        description: 'Luxury swiss tents under the stars. Camel safari and folk dance performances every evening.',
        price: 8000,
        priceUnit: 'night',
        capacity: {
            guests: 3,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Swiss Tents', 'Camel Safari', 'Cultural Show', 'Buffet Dinner', 'Bonfire'],
        images: [
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
            'https://images.unsplash.com/photo-1547471080-2a2b34a65529?w=800',
            'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800'
        ],
        rating: 4.9,
        reviews: 500,
        ownerId: 'owner-8',
        ownerName: 'Desert Kings',
        availability: true,
        rules: ['Desert conservation rules', 'Water scarcity awareness'],
        checkIn: '3:00 PM',
        checkOut: '10:00 AM'
    },
    {
        id: 'resort-5',
        type: PROPERTY_TYPES.RESORT,
        name: 'Blue Lagoon Island',
        location: 'Andaman',
        city: 'Port Blair',
        address: 'Havelock Island',
        description: 'Private beach huts with crystal clear water. Scuba diving and snorkeling paradise.',
        price: 25000,
        priceUnit: 'night',
        capacity: {
            guests: 2,
            bedrooms: 1,
            bathrooms: 1
        },
        amenities: ['Private Beach', 'Scuba Diving', 'Seafood Restaurant', 'Spa', 'AC'],
        images: [
            'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800',
            'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
            'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800'
        ],
        rating: 5.0,
        reviews: 150,
        ownerId: 'owner-7',
        ownerName: 'Island Escapes',
        availability: true,
        rules: ['No plastic on beach', 'Coral reef protection guidelines'],
        checkIn: '10:00 AM',
        checkOut: '9:00 AM'
    },
    {
        id: 'resort-6',
        type: PROPERTY_TYPES.RESORT,
        name: 'Tea Estate Bungalow',
        location: 'Munnar, Kerala',
        city: 'Munnar',
        address: 'Kanan Devan Hills',
        description: 'Stay in a colonial bungalow surrounded by rolling tea gardens. Misty mornings and hot tea.',
        price: 11000,
        priceUnit: 'night',
        capacity: {
            guests: 6,
            bedrooms: 3,
            bathrooms: 3
        },
        amenities: ['Tea Garden Walk', 'Fireplace', 'Library', 'Cook', 'Garden'],
        images: [
            'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800',
            'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800',
            'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800'
        ],
        rating: 4.8,
        reviews: 95,
        ownerId: 'owner-8',
        ownerName: 'Plantation Stays',
        availability: false,
        rules: ['Silent valley zone', 'Eco-friendly disposal'],
        checkIn: '1:00 PM',
        checkOut: '11:00 AM'
    }
];

// Helper functions
export const getPropertyById = (id) => {
    return properties.find(p => p.id === id);
};

export const getPropertiesByType = (type) => {
    return properties.filter(p => p.type === type);
};

export const getPropertiesByCity = (city) => {
    return properties.filter(p =>
        p.city.toLowerCase().includes(city.toLowerCase())
    );
};

export const searchProperties = (filters = {}) => {
    let results = [...properties];

    if (filters.type) {
        results = results.filter(p => p.type === filters.type);
    }

    if (filters.city) {
        results = results.filter(p =>
            p.city.toLowerCase().includes(filters.city.toLowerCase())
        );
    }

    if (filters.minPrice) {
        results = results.filter(p => p.price >= filters.minPrice);
    }

    if (filters.maxPrice) {
        results = results.filter(p => p.price <= filters.maxPrice);
    }

    if (filters.guests) {
        results = results.filter(p => p.capacity.guests >= filters.guests);
    }

    if (filters.amenities && filters.amenities.length > 0) {
        results = results.filter(p =>
            filters.amenities.every(amenity => p.amenities.includes(amenity))
        );
    }

    if (filters.sortBy === 'price-low') {
        results.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
        results.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
    }

    return results;
};

export const getFeaturedProperties = (limit = 4) => {
    return properties
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
};

