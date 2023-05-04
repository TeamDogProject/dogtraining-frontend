import api from './config';

const listAllUsers = async () => {
    const {data} = await api.get('/users', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};

export default listAllUsers;
