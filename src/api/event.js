import axios from '../configs/axios';

export const getAllEvent = () => axios.get('/event');
export const getAllEventInScope = (data) => axios.post('/event/scope/', data);
