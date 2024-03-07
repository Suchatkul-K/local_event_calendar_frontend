import axios from '../configs/axios';

export const getAllEvent = () => axios.get('/event');
export const getEvent = (eventId) => axios.get(`/event/${eventId}`);
export const getAllEventInScope = (data) => axios.post('/event/scope/', data);
export const getFilteredEvent = (data) => axios.post('/event/filter/', data);
export const createEvent = (data) => axios.post('/event', data);
