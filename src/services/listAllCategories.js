import api from './config'

const listAllCategories = async () => {
    const {data} = await api.get('/categories', {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default listAllCategories;