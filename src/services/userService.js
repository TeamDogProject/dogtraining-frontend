import api from './config'

// GetProfile from user when do Login

const getProfile = async() => {
    try {
        
        const {data} = await api.get(`/users/profile`, {
            headers:{
                'token': localStorage.getItem('token')
            }
        })
        console.log(data)
        return data
    } catch (error) {
        return error.message
    }
}

// Create a User

const createUser = async (obj) => {
    const {data} = await api.post('/users/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

// List all Users

const listAllUsers = async () => {
    const {data} = await api.get('/users', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};


export {
    getProfile,
    listAllUsers,
    createUser
}