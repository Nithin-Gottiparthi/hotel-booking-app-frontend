// Notifications Page

import { useAuth } from '../../context/AuthContext';
import { getNotificationsByUserId } from '../../api/users';

export default function Notifications() {
    const { user } = useAuth();
    const notifications = user ? getNotificationsByUserId(user.id) : [];

    const getNotificationIcon = (type) => {
        const icons = {
            'booking': '📅',
            'payment': '💳',
            'promotion': '🎉',
            'reminder': '⏰',
            'update': 'ℹ️'
        };
        return icons[type] || '🔔';
    };

    const getNotificationColor = (type) => {
        const colors = {
            'booking': 'bg-blue-50 border-blue-200',
            'payment': 'bg-green-50 border-green-200',
            'promotion': 'bg-purple-50 border-purple-200',
            'reminder': 'bg-yellow-50 border-yellow-200',
            'update': 'bg-gray-50 border-gray-200'
        };
        return colors[type] || 'bg-gray-50 border-gray-200';
    };

    const markAsRead = (notificationId) => {
        alert(`Notification ${notificationId} marked as read (dummy action)`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>

                {notifications.length > 0 ? (
                    <div className="space-y-4">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`bg-white rounded-xl p-5 border ${getNotificationColor(notification.type)} ${!notification.read ? 'shadow-md' : 'shadow-sm opacity-75'
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

                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-500">
                                                {new Date(notification.createdAt).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>

                                            {!notification.read && (
                                                <button
                                                    onClick={() => markAsRead(notification.id)}
                                                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                                >
                                                    Mark as read
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl p-12 text-center">
                        <div className="text-6xl mb-4">🔔</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No notifications
                        </h3>
                        <p className="text-gray-600">
                            You're all caught up! We'll notify you of any updates here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
