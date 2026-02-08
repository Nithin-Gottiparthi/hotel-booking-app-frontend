// Dummy booking data

export const BOOKING_STATUS = {
    PENDING: 'Pending',
    CONFIRMED: 'Confirmed',
    COMPLETED: 'Completed',
    CANCELLED: 'Cancelled',
    REJECTED: 'Rejected'
};

export const bookings = [
    {
        id: 'booking-1',
        propertyId: 'farm-1',
        propertyName: 'Green Valley Farmhouse',
        propertyType: 'Farmhouse',
        userId: 'user-1',
        userName: 'Amit Singh',
        userEmail: 'amit.singh@email.com',
        userPhone: '+91 98765 43210',
        checkIn: '2026-02-15',
        checkOut: '2026-02-17',
        guests: 10,
        nights: 2,
        pricePerNight: 8500,
        totalPrice: 17000,
        status: BOOKING_STATUS.CONFIRMED,
        bookingDate: '2026-02-01',
        paymentStatus: 'Paid',
        specialRequests: 'Need early check-in if possible'
    },
    {
        id: 'booking-2',
        propertyId: 'hotel-1',
        propertyName: 'Grand Plaza Hotel',
        propertyType: 'Hotel',
        userId: 'user-1',
        userName: 'Amit Singh',
        userEmail: 'amit.singh@email.com',
        userPhone: '+91 98765 43210',
        checkIn: '2026-03-10',
        checkOut: '2026-03-12',
        guests: 2,
        nights: 2,
        pricePerNight: 4500,
        totalPrice: 9000,
        status: BOOKING_STATUS.PENDING,
        bookingDate: '2026-02-05',
        paymentStatus: 'Pending',
        specialRequests: ''
    },
    {
        id: 'booking-3',
        propertyId: 'resort-1',
        propertyName: 'Paradise Beach Resort',
        propertyType: 'Resort',
        userId: 'user-2',
        userName: 'Priya Sharma',
        userEmail: 'priya.sharma@email.com',
        userPhone: '+91 98765 43211',
        checkIn: '2026-01-20',
        checkOut: '2026-01-25',
        guests: 3,
        nights: 5,
        pricePerNight: 12000,
        totalPrice: 60000,
        status: BOOKING_STATUS.COMPLETED,
        bookingDate: '2026-01-05',
        paymentStatus: 'Paid',
        specialRequests: 'Beach view room preferred'
    },
    {
        id: 'booking-4',
        propertyId: 'pg-1',
        propertyName: 'Student Haven PG',
        propertyType: 'PG',
        userId: 'user-3',
        userName: 'Rahul Kumar',
        userEmail: 'rahul.kumar@email.com',
        userPhone: '+91 98765 43212',
        checkIn: '2026-02-01',
        checkOut: '2026-03-01',
        guests: 1,
        nights: 28,
        pricePerNight: 304, // Monthly divided by 28
        totalPrice: 8500,
        status: BOOKING_STATUS.CONFIRMED,
        bookingDate: '2026-01-25',
        paymentStatus: 'Paid',
        specialRequests: 'Vegetarian meals only'
    },
    {
        id: 'booking-5',
        propertyId: 'farm-2',
        propertyName: 'Sunset Hills Farm',
        propertyType: 'Farmhouse',
        userId: 'user-1',
        userName: 'Amit Singh',
        userEmail: 'amit.singh@email.com',
        userPhone: '+91 98765 43210',
        checkIn: '2025-12-25',
        checkOut: '2025-12-27',
        guests: 15,
        nights: 2,
        pricePerNight: 10000,
        totalPrice: 20000,
        status: BOOKING_STATUS.COMPLETED,
        bookingDate: '2025-12-10',
        paymentStatus: 'Paid',
        specialRequests: 'New Year celebration setup needed'
    }
];

export const eventBookings = [
    {
        id: 'event-booking-1',
        eventId: 'event-1',
        eventName: 'Royal Wedding Package',
        eventType: 'Wedding',
        userId: 'user-2',
        userName: 'Priya Sharma',
        userEmail: 'priya.sharma@email.com',
        userPhone: '+91 98765 43211',
        eventDate: '2026-04-15',
        guests: 300,
        basePrice: 500000,
        totalPrice: 550000,
        status: BOOKING_STATUS.CONFIRMED,
        bookingDate: '2026-01-15',
        paymentStatus: 'Advance Paid',
        specialRequests: 'Traditional South Indian wedding setup'
    },
    {
        id: 'event-booking-2',
        eventId: 'event-3',
        eventName: 'Premium Birthday Celebration',
        eventType: 'Birthday Party',
        userId: 'user-1',
        userName: 'Amit Singh',
        userEmail: 'amit.singh@email.com',
        userPhone: '+91 98765 43210',
        eventDate: '2026-02-20',
        guests: 50,
        basePrice: 50000,
        totalPrice: 50000,
        status: BOOKING_STATUS.PENDING,
        bookingDate: '2026-02-06',
        paymentStatus: 'Pending',
        specialRequests: 'Superhero theme for 8-year-old'
    }
];

// Helper functions
export const getBookingsByUserId = (userId) => {
    return bookings.filter(b => b.userId === userId);
};

export const getEventBookingsByUserId = (userId) => {
    return eventBookings.filter(b => b.userId === userId);
};

export const getBookingsByPropertyId = (propertyId) => {
    return bookings.filter(b => b.propertyId === propertyId);
};

export const getBookingById = (id) => {
    return bookings.find(b => b.id === id);
};

export const getEventBookingById = (id) => {
    return eventBookings.find(b => b.id === id);
};

export const getPendingBookings = () => {
    return bookings.filter(b => b.status === BOOKING_STATUS.PENDING);
};

export const getUpcomingBookings = (userId) => {
    const today = new Date().toISOString().split('T')[0];
    return bookings.filter(b =>
        b.userId === userId &&
        b.checkIn >= today &&
        b.status !== BOOKING_STATUS.CANCELLED
    );
};

export const getPastBookings = (userId) => {
    const today = new Date().toISOString().split('T')[0];
    return bookings.filter(b =>
        b.userId === userId &&
        b.checkOut < today
    );
};
