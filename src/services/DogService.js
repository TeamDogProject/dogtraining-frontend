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

//Update a dog 

const saveDog = async (id, obj) => {
    try {
       const {data} = await api.put(`/dogs/${id}`, obj, {
        headers: {
          'token': localStorage.getItem('token'),
        }
      });
      return data;
    } catch (err) {
      console.error(err)
    }
};

export {
    createDog, 
    editDog,
    listAllDogs, 
    saveDog
}