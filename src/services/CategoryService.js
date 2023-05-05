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
const saveCategory = async (id, name) => {
    try {
       const {data} = await api.put(`/categories/${id}`, {
        category_name: name
      }, {
        headers: {
          'token': localStorage.getItem('token'),
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        }
      });
      console.log(data)
      return data;
    } catch (err) {
      console.error(err)
    }
};

  
export {
    createCategory, 
    editCategory, 
    listAllCategories, 
    saveCategory
}