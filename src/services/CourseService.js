import api from "./config";

// Create a course

const createCourse = async (obj) => {
    const {data} = await api.post('/packages/', obj, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    return data;
};

// Edit a course

const editCourse = async (id) => {
    const {data} = await api.get(`/packages/${id}`, {
        headers: {
            'token': localStorage.getItem('token')
        }
    })
    console.log(data)
    return data;
};

// List all courses

const listAllCourses = async () => {
    const {data} = await api.get('/packages', {
        headers:{
            'token': localStorage.getItem('token')
        }
    })
  return data;
};

// Update a package

const saveCourse = async (id, name, description, duration, price, place, categoryId) => {
    try {
       const {data} = await api.put(`/packages/${id}`, {
        name: name, 
        description: description,
        duration:duration,
        price:price,
        place:place,
        categoryId:categoryId
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
    createCourse, 
    editCourse, 
    listAllCourses,
    saveCourse
}