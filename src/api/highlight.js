import axios from '../configs/axios';

export const createHighlight = (data) => axios.post('/event/highlight', data);
export const deleteHighlight = (data) => axios.delete('/event/highlight', data);
