import api from "./config";

const editCategory = async (id) => {
    const {data} = await api.get(`/categories/${id}`, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data;

};

export default editCategory;