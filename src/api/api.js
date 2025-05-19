import axios from 'axios';

const API_URL = 'http://localhost:3001'; // JSON Server

export const getProperties = () => axios.get(`${API_URL}/properties`);

export const updatePropertyViews = (id, updatedViews) =>
    axios.patch(`${API_URL}/properties/${id}`, { views: updatedViews });

export const updatePropertyAvailability = (id, availability) =>
    axios.patch(`${API_URL}/properties/${id}`, { available: availability });
