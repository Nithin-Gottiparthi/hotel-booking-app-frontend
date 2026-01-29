import api from "./axios";

export const getHotelsApi = (params) => api.get("/hotels", { params });
export const getHotelByIdApi = (id) => api.get(`/hotels/${id}`);
export const getRoomsByHotelApi = (hotelId) => api.get(`/hotels/${hotelId}/rooms`);