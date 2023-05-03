import api from "./config";

// Create a dog

const createDog = async (obj) => {
    const {data} = await api.post('/dogs/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

// Edit a dog

const editDog = async (id) => {
    const {data} = await api.get(`/dogs/${id}`, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data;

};

// List all dogs

const listAllDogs = async () => {
    const {data} = await api.get('/dogs', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};

export {
    createDog, 
    editDog,
    listAllDogs
}