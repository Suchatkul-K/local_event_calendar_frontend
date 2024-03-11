import axios from '../configs/axios';

const createReminder = (eventId) => axios.post(`/user/reminder/${eventId}`);

export default createReminder;
