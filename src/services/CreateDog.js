import api from './config'

const createDog = async (obj) => {
    const {data} = await api.post('/dogs/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default createDog;