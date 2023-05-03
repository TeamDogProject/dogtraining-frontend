import api from "./config";

const saveCategory = async () => {
    const {data} = await api.get('/categories/:id',{
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default saveCategory;