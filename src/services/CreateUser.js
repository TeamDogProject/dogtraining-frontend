import api from './config'

const createUser = async (obj) => {
    const {data} = await api.post('/users/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default createUser;