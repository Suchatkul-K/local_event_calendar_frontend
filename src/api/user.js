import axios from '../configs/axios';

export const createReminder = (eventId)  => axios.post(`/reminder/${eventId}`);
export const deleteReminder = (eventId)  => axios.get(`/reminder/${eventId}`);


