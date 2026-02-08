// Dummy user data

export const users = [
    {
        id: 'user-1',
        name: 'Amit Singh',
        email: 'amit.singh@email.com',
        phone: '+91 98765 43210',
        role: 'tenant',
        avatar: 'https://ui-avatars.com/api/?name=Amit+Singh&background=4F46E5&color=fff',
        address: {
            street: '123 MG Road',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001'
        },
        preferences: {
            propertyTypes: ['Farmhouse', 'Resort'],
            priceRange: { min: 5000, max: 15000 },
            amenities: ['WiFi', 'Pool', 'Parking']
        },
        savedProperties: ['farm-1', 'resort-1', 'hotel-2'],
        joinedDate: '2025-06-15',
        verified: true
    },
    {
        id: 'user-2',
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 98765 43211',
        role: 'tenant',
        avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=EC4899&color=fff',
        address: {
            street: '456 Park Street',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560001'
        },
        preferences: {
            propertyTypes: ['Hotel', 'Resort'],
            priceRange: { min: 3000, max: 12000 },
            amenities: ['WiFi', 'AC', 'Restaurant']
        },
        savedProperties: ['hotel-1', 'resort-2'],
        joinedDate: '2025-08-20',
        verified: true
    },
    {
        id: 'user-3',
        name: 'Rahul Kumar',
        email: 'rahul.kumar@email.com',
        phone: '+91 98765 43212',
        role: 'tenant',
        avatar: 'https://ui-avatars.com/api/?name=Rahul+Kumar&background=10B981&color=fff',
        address: {
            street: '789 Brigade Road',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560025'
        },
        preferences: {
            propertyTypes: ['PG'],
            priceRange: { min: 5000, max: 15000 },
            amenities: ['WiFi', 'Meals', 'Laundry']
        },
        savedProperties: ['pg-1', 'pg-2'],
        joinedDate: '2025-09-10',
        verified: true
    },
    {
        id: 'owner-1',
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43220',
        role: 'owner',
        avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=F59E0B&color=fff',
        address: {
            street: 'Lonavala Properties',
            city: 'Lonavala',
            state: 'Maharashtra',
            pincode: '410401'
        },
        properties: ['farm-1'],
        bankDetails: {
            accountName: 'Rajesh Kumar',
            accountNumber: '1234567890',
            ifsc: 'HDFC0001234',
            bank: 'HDFC Bank'
        },
        joinedDate: '2024-03-15',
        verified: true,
        documentsSubmitted: true
    },
    {
        id: 'owner-2',
        name: 'Priya Sharma',
        email: 'priya.owner@email.com',
        phone: '+91 98765 43221',
        role: 'owner',
        avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=8B5CF6&color=fff',
        address: {
            street: 'Karjat Estates',
            city: 'Karjat',
            state: 'Maharashtra',
            pincode: '410201'
        },
        properties: ['farm-2'],
        bankDetails: {
            accountName: 'Priya Sharma',
            accountNumber: '0987654321',
            ifsc: 'ICIC0001234',
            bank: 'ICICI Bank'
        },
        joinedDate: '2024-05-20',
        verified: true,
        documentsSubmitted: true
    },
    {
        id: 'owner-3',
        name: 'Hotel Management Co.',
        email: 'contact@grandplaza.com',
        phone: '+91 98765 43222',
        role: 'owner',
        avatar: 'https://ui-avatars.com/api/?name=Grand+Plaza&background=EF4444&color=fff',
        address: {
            street: 'Andheri East',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400069'
        },
        properties: ['hotel-1'],
        bankDetails: {
            accountName: 'Grand Plaza Hotel Pvt Ltd',
            accountNumber: '1122334455',
            ifsc: 'SBIN0001234',
            bank: 'State Bank of India'
        },
        joinedDate: '2023-01-10',
        verified: true,
        documentsSubmitted: true
    }
];

export const notifications = [
    {
        id: 'notif-1',
        userId: 'user-1',
        type: 'booking',
        title: 'Booking Confirmed',
        message: 'Your booking for Green Valley Farmhouse has been confirmed.',
        date: '2026-02-01T10:30:00',
        read: true,
        link: '/my-bookings'
    },
    {
        id: 'notif-2',
        userId: 'user-1',
        type: 'reminder',
        title: 'Upcoming Stay',
        message: 'Your stay at Green Valley Farmhouse starts in 3 days.',
        date: '2026-02-12T09:00:00',
        read: false,
        link: '/my-bookings'
    },
    {
        id: 'notif-3',
        userId: 'user-1',
        type: 'offer',
        title: 'Special Offer',
        message: 'Get 20% off on your next resort booking!',
        date: '2026-02-05T14:00:00',
        read: false,
        link: '/explore?type=Resort'
    },
    {
        id: 'notif-4',
        userId: 'owner-1',
        type: 'booking',
        title: 'New Booking Request',
        message: 'You have a new booking request for Green Valley Farmhouse.',
        date: '2026-02-06T11:20:00',
        read: false,
        link: '/owner/booking-requests'
    },
    {
        id: 'notif-5',
        userId: 'owner-1',
        type: 'payment',
        title: 'Payment Received',
        message: 'Payment of ₹17,000 received for booking #booking-1.',
        date: '2026-02-01T15:45:00',
        read: true,
        link: '/owner/payouts'
    }
];

// Helper functions
export const getUserById = (id) => {
    return users.find(u => u.id === id);
};

export const getUserByEmail = (email) => {
    return users.find(u => u.email === email);
};

export const getTenants = () => {
    return users.filter(u => u.role === 'tenant');
};

export const getOwners = () => {
    return users.filter(u => u.role === 'owner');
};

export const getNotificationsByUserId = (userId) => {
    return notifications.filter(n => n.userId === userId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getUnreadNotifications = (userId) => {
    return notifications.filter(n => n.userId === userId && !n.read);
};

export const markNotificationAsRead = (notificationId) => {
    const notif = notifications.find(n => n.id === notificationId);
    if (notif) {
        notif.read = true;
    }
    return notif;
};
