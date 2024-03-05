import axios from '../configs/axios';

// export const register = user => axios.post('/auth/register',user)

export const Apilogin = (user) => axios.post('/user/login', user);

export const Apiregister = (data) => axios.post('/user/register', data);
