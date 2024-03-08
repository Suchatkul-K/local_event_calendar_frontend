import axios from '../configs/axios';
const createReminder = (eventId)  => axios.get(`/reminder/${eventId}`);

export default createReminder