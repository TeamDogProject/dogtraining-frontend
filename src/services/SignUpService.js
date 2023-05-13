import api from "./config";

const SignUpService = async (form)=> {
    console.log('creating user...')
    try { 
        const {data} = await api.post('/auth/signup', form, {
      
      
    })
    localStorage.setItem('token', data.token)
    console.log(data)
    return data
   
    } catch (error) {
        console.log(error)
    }
}
export default SignUpService