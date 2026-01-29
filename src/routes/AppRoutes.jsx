import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Landing from "../pages/user/Landing";
import About from "../pages/user/About";
import Hotels from "../pages/user/Hotels";
import HotelDetails from "../pages/user/HotelDetails";
import BookingStep1 from "../pages/user/BookingStep1";
import BookingStep2 from "../pages/user/BookingStep2";
import Dashboard from "../pages/user/Dashboard";
import MyBookings from "../pages/user/MyBookings";

import AdminDashboard from "../pages/admin/AdminDashboard";
import PropertyManagement from "../pages/admin/PropertyManagement";
import AddProperty from "../pages/admin/AddProperty";
import EditProperty from "../pages/admin/EditProperty";
import BookingRequests from "../pages/admin/BookingRequests";
import AdminCalendar from "../pages/admin/AdminCalendar";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* USER */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />

        <Route
          path="/booking/step-1"
          element={
            <ProtectedRoute>
              <BookingStep1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking/step-2/:bookingId"
          element={
            <ProtectedRoute>
              <BookingStep2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="properties" element={<PropertyManagement />} />
        <Route path="properties/add" element={<AddProperty />} />
        <Route path="properties/edit/:id" element={<EditProperty />} />
        <Route path="booking-requests" element={<BookingRequests />} />
        <Route path="calendar" element={<AdminCalendar />} />
      </Route>
    </Routes>
  );
}
