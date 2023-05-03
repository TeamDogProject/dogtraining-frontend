import api from "./config";

const createCategory = async (obj) => {
    const {data} = await api.post('/categories/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default createCategory;