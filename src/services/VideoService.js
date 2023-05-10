import api from './config'

// List All Videos
const listAllVideos = async () => {
  try {
    const { data } = await api.get(`/videos`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

// Create a video

const createVideo = async (obj) => {
  const { data } = await api.post('/videos/', obj, {
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  return data
}

//Edit a video

const editVideo = async (id) => {
  const { data } = await api.get(`/videos/${id}`, {
    headers: {
      token: localStorage.getItem('token'),
    },
  })
  return data
}

//Update a video
const saveVideo = async (id, obj) => {
  try {
    const { data } = await api.put(`/videos/${id}`, obj, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error(err)
  }
}

export {
    listAllVideos,
    createVideo, 
    editVideo, 
    saveVideo
}