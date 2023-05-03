import api from "./config";

const editDog = async (id) => {
    const {data} = await api.get(`/dogs/${id}`, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data;

};

export default editDog;
