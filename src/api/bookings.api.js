import api from "./axios";

export const createBookingApi = (payload) => api.post("/bookings", payload);

export const confirmPaymentApi = (bookingId) =>
  api.patch(`/bookings/${bookingId}/confirm-payment`);

export const getMyBookingsApi = () => api.get("/bookings/my");

export const cancelBookingApi = (bookingId) =>
  api.patch(`/bookings/${bookingId}/cancel`);

export const getBookingByIdApi = (bookingId) =>
  api.get(`/bookings/${bookingId}`);
