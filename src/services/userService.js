import api from './config'
import { useNavigate } from 'react-router-dom'

const getProfile = async() => {
    try {
        
        const {data} = await api.get('/users/profile', {
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

export {
    getProfile
}