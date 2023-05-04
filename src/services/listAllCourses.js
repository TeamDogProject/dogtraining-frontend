import api from './config';

const listAllCourses = async () => {
    const {data} = await api.get('/packages', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};

export default listAllCourses;
