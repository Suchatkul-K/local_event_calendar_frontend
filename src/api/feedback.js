import axios from '../configs/axios';

const createFeedback = (eventId, data) =>
  axios.post(`/event/${eventId}/feedback`, data);

export default createFeedback;
