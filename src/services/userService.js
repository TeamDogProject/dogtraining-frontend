
import api from './config'

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

const getVideos = async ()=>{
    try {

        const {data}  = await api.get('/videos/me', {
          headers: {
            token: localStorage.getItem('token'),
          },
        })
        return data
    } catch (error) {
        return error.message
    }
}

const getUserDogs = async () => {

    try{  

    const {data} = await api.get('/dogs/profile', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
  return data
} catch (error){
    return error.message
}
}


 const deleteDog = async (id) => {
    try {
        const { data } = await api.delete(`/dogs/${id}`, {
            headers: {
                'token': localStorage.getItem('token')
              }
            });
    } catch (error) {
        console.log(error);
    }
 }


const createdog = async (form) => {
    try { 
        const data  = await api.post('/dogs', form, {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
return data
    } catch (error) {
        
    }
}



const deleteUser = async () => {
    try {
        const {data} = await api.delete('/users/profile', {
            headers:{
                'token': localStorage.getItem('token')
            }
        })
        return data
    } catch (error) {
        return(error)

        }
    }

    const getMyPackages = async() =>{
        try {
            const data = await api.get('/packages', {
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const changePassword = async (password) => {
        try {
            const {data} = await api.put('/auth/profile/changePassword',{password:password}, { //se pasa como segundo parámetro los cambios que se quieren hacer
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            return data
        } catch (error) {
            return(error)
    
            }
        }



export {
  getProfile,
  getUserDogs,
  deleteUser,
  changePassword,
  deleteDog,
  createdog,
  getMyPackages,
  getVideos,
}