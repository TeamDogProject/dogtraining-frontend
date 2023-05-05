
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


const deleteUser = async () => {
    try {
        const {data} = await api.delete('/users/profile', {
            headers:{
                'token': localStorage.getItem('token')
            }
        })
        console.log(data)
        return data
    } catch (error) {
        return(error)

        }
    }


    const changePassword = async (password) => {
        try {
            const {data} = await api.put('/auth/profile/changePassword',{password:password}, { //se pasa como segundo parámetro los cambios que se quieren hacer
                headers:{
                    'token': localStorage.getItem('token')
                }
            })
            console.log(data)
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
}