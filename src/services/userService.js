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

//Update a user
const saveUser = async (id, name ,surname,username, email, identity_card, password, phone, confirmation_password, role) => {
    try {
       const {data} = await api.put(`/users/${id}`, {
        name: name, 
        surname: surname,
        username:username,
        email: email,
        identity_card: identity_card,
        password: password,
        phone: phone,
        confirmation_password: confirmation_password, 
        role: role
      }, {
        headers: {
          'token': localStorage.getItem('token'),
        }
      });
      console.log(data)
      return data;
    } catch (err) {
      console.error(err)
    }
};


export {
    getProfile,
    listAllUsers,
    createUser,
    saveUser
}