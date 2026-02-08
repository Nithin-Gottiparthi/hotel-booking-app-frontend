// Main App Routes

import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from '../context/AuthContext'; // Removed duplicate provider

// Route Components
import TenantRoutes from './TenantRoutes';
import OwnerRoutes from './OwnerRoutes';

// Auth Pages (outside layouts)
import Login from '../pages/tenant/Login';
import Signup from '../pages/tenant/Signup';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes (No Layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Owner Routes */}
      <Route path="/owner/*" element={<OwnerRoutes />} />

      {/* Tenant Routes (Default) */}
      <Route path="/*" element={<TenantRoutes />} />
    </Routes>
  );
}
