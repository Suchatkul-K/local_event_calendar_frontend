import axios from '../configs/axios';

export const createHighlight = () => axios.post('/event/highlight',data);
export const deleteHighlight = () => axios.delete('/event/highlight',data);
