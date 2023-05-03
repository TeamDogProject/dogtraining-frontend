import api from './config'

const createCourse = async (obj) => {
    const {data} = await api.post('/packages/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default createCourse;