import api from './config';

const listAllDogs = async () => {
    const {data} = await api.get('/dogs', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};

export default listAllDogs;
