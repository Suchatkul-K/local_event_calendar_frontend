import axios from '../configs/axios';

export const createHighlight = (data) => axios.post('/event/highlight', data);
export const deleteHighlight = (evenId) =>
  axios.delete(`/event/highlight/${evenId}`);
export const getHighlight = () => axios.get('/event/highlight');
