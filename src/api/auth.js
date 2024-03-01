import axios from '../configs/axios';

// export const register = user => axios.post('/auth/register',user)

export default function Apilogin(user) {
  return axios.post('/user/login', user);
}
