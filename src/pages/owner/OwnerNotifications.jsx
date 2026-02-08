// Owner Notifications Page

export default function OwnerNotifications() {
    const notifications = [
        {
            id: 1,
            type: 'booking',
            title: 'New Booking Request',
            message: 'You have a new booking request for Sunset Villa Farmhouse',
            date: '2026-02-06T10:30:00',
            read: false
        },
        {
            id: 2,
            type: 'payment',
            title: 'Payout Processed',
            message: 'Your payout of ₹45,000 has been processed successfully',
            date: '2026-02-05T14:20:00',
            read: false
        },
        {
            id: 3,
            type: 'review',
            title: 'New Review',
            message: 'A guest left a 5-star review for Grand Plaza Hotel',
            date: '2026-02-04T09:15:00',
            read: true
        }
    ];

    const getNotificationIcon = (type) => {
        const icons = {
            'booking': '📅',
            'payment': '💳',
            'review': '⭐',
            'update': 'ℹ️'
        };
        return icons[type] || '🔔';
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>

            <div className="max-w-3xl space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`bg-white rounded-xl p-5 border ${!notification.read ? 'border-indigo-200 shadow-md' : 'border-gray-200 shadow-sm opacity-75'
                            }`}
                    >
                        <div className="flex gap-4">
                            <div className="text-3xl">{getNotificationIcon(notification.type)}</div>

                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                                    {!notification.read && (
                                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                                    )}
                                </div>

                                <p className="text-gray-700 mb-3">{notification.message}</p>

                                <p className="text-sm text-gray-500">
                                    {new Date(notification.date).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
