import api from "./config";

// Create a category

const createCategory = async (obj) => {
    const {data} = await api.post('/categories/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

// Edit a category

const editCategory = async (id) => {
    const {data} = await api.get(`/categories/${id}`, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data;

};

// List all categories

const listAllCategories = async () => {
    const {data} = await api.get('/categories', {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

// Update a category
const saveCategory = async (id, category_name) => {
    const body = {category_name: category_name}
    const {data} = await api.put(`/categories/${id}`,body,{
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data
};


export {
    createCategory, 
    editCategory, 
    listAllCategories, 
    saveCategory
}