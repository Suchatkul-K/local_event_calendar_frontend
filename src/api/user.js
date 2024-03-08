import axios from '../configs/axios';

export const createReminder = (eventId)  => axios.get(`/reminder/${eventId}`);