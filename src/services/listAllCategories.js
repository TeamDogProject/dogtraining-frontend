import api from "./config";

const listAllCategories = async () => {
 const { data } = api.get('/categories', {
    headers:{
        'token': localStorage.getItem('token')
    }
 })
}

export default listAllCategories