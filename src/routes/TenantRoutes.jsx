// Tenant Routes

import { Routes, Route } from 'react-router-dom';
import TenantLayout from '../layouts/TenantLayout';
import { WishlistProvider } from '../context/WishlistContext';

// Auth Pages
import Login from '../pages/tenant/Login';
import Signup from '../pages/tenant/Signup';

// Discovery & Booking
import Landing from '../pages/tenant/Landing';
import Explore from '../pages/tenant/Explore';
import PropertyDetails from '../pages/tenant/PropertyDetails';
import BookingFlow from '../pages/tenant/BookingFlow';
import BookingSuccess from '../pages/tenant/BookingSuccess';

// User Account
import Profile from '../pages/tenant/Profile';
import MyBookings from '../pages/tenant/MyBookings';
import SavedProperties from '../pages/tenant/SavedProperties';
import FloatingWidget from '../components/ui/FloatingWidget';
import Greeter from '../components/ui/Greeter';

import Notifications from '../pages/tenant/Notifications';
import Inbox from '../pages/tenant/Inbox';
import TrustSafety from '../pages/tenant/TrustSafety';

// Events
import EventServices from '../pages/tenant/EventServices';
import EventDetails from '../pages/tenant/EventDetails';
import MyEvents from '../pages/tenant/MyEvents';

// Info Pages
import About from '../pages/tenant/About';
import HelpSupport from '../pages/tenant/HelpSupport';
import Terms from '../pages/tenant/Terms';
import Privacy from '../pages/tenant/Privacy';
import Careers from '../pages/tenant/Careers';
import Contact from '../pages/tenant/Contact';
import Blog from '../pages/tenant/Blog';

export default function TenantRoutes() {
    return (
        <WishlistProvider>
            <Routes>
                <Route element={<TenantLayout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/property/:id" element={<PropertyDetails />} />
                    <Route path="/booking" element={<BookingFlow />} />
                    <Route path="/booking-success" element={<BookingSuccess />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/my-bookings" element={<MyBookings />} />
                    <Route path="/saved" element={<SavedProperties />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/inbox" element={<Inbox />} />

                    <Route path="/events" element={<EventServices />} />
                    <Route path="/event/:id" element={<EventDetails />} />
                    <Route path="/my-events" element={<MyEvents />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<HelpSupport />} />
                    <Route path="/trust-safety" element={<TrustSafety />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>
            </Routes>
            <FloatingWidget />
            <Greeter />
        </WishlistProvider>
    );
}
