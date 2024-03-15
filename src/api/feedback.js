import axios from '../configs/axios';

const createFeedback = (eventId) => axios.get(`/event/${eventId}/feedback`);

export default createFeedback;