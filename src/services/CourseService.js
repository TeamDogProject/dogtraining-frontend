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

export {
    createCourse, 
    editCourse, 
    listAllCourses
}