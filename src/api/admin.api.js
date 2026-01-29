import api from "./axios";

export const getAdminDashboardApi = () => api.get("/admin/dashboard");

export const getAdminHotelsApi = () => api.get("/admin/hotels");
export const createHotelAdminApi = (payload) => api.post("/admin/hotels", payload);
export const updateHotelAdminApi = (id, payload) => api.put(`/admin/hotels/${id}`, payload);
export const deleteHotelAdminApi = (id) => api.delete(`/admin/hotels/${id}`);

export const addRoomAdminApi = (hotelId, payload) =>
  api.post(`/admin/hotels/${hotelId}/rooms`, payload);

export const updateRoomAdminApi = (roomId, payload) =>
  api.put(`/admin/rooms/${roomId}`, payload);

export const deleteRoomAdminApi = (roomId) =>
  api.delete(`/admin/rooms/${roomId}`);

export const getAdminBookingsApi = () => api.get("/admin/bookings");
export const getAdminCalendarApi = () => api.get("/admin/calendar");
