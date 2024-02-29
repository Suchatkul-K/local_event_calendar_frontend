import axios from '../configs/axios';

const getAllEvent = () => axios.get('/event');

export default getAllEvent;
