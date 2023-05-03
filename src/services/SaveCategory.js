import api from "./config";

const editCategory = async () => {
    const {data} = await api.get('/categories/:id',{
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

export default editCategory;