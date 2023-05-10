import api from "./config";

const SignUpService = async (obj)=> {
    console.log('creating user...')
    try { 
        const data = await api.post('/auth/signup', obj, {
      
    
    })
    console.log(data)
    return data
    localStorage.setItem('token', data.token)
    } catch (error) {
        console.log(error)
    }
}
export default SignUpService