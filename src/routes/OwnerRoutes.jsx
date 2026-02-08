// Owner Routes (Protected)

import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import OwnerLayout from '../layouts/OwnerLayout';

// Owner Pages
import OwnerDashboard from '../pages/owner/OwnerDashboard';
import Analytics from '../pages/owner/Analytics';
import PropertyManagement from '../pages/owner/PropertyManagement';
import AddProperty from '../pages/owner/AddProperty';
import BookingRequests from '../pages/owner/BookingRequests';
import Calendar from '../pages/owner/Calendar';
import Payouts from '../pages/owner/Payouts';
import OwnerNotifications from '../pages/owner/OwnerNotifications';
import OwnerOnboarding from '../pages/owner/OwnerOnboarding';

// Protected Route Wrapper
function ProtectedOwnerRoute({ children }) {
    const { isAuthenticated, role } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (role !== 'owner') {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default function OwnerRoutes() {
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    <ProtectedOwnerRoute>
                        <OwnerLayout />
                    </ProtectedOwnerRoute>
                }
            >
                <Route index element={<OwnerDashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="properties" element={<PropertyManagement />} />
                <Route path="properties/add" element={<AddProperty />} />
                <Route path="booking-requests" element={<BookingRequests />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="payouts" element={<Payouts />} />
                <Route path="notifications" element={<OwnerNotifications />} />
                <Route path="onboarding" element={<OwnerOnboarding />} />
            </Route>
        </Routes>
    );
}
