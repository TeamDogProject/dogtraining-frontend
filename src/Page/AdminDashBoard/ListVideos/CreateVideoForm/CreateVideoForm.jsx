import React from 'react'
import { Button, Select } from '@mui/material'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { createVideo } from '../../../../services/VideoService'
import { FormLabel } from '@mui/material'
import { useState } from 'react'
import { listAllVideos } from '../../../../services/VideoService'
import { useEffect } from 'react'


function CreateVideoForm() {

    const [open, setOpen] = React.useState(false)
    const [videos, setVideos] = useState([])

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [video_url, setVideoUrl] = useState('')
    const [video_title, setVideoTitle] = useState('')
    const [video_description, setVideoDescription] = useState('')
    const [video_tags, setVideoTags] = useState('')
    
    const handleChangeVideoUrl = (e) => {
    setVideoUrl(e.target.value)
    }

    const handleChangeVideoTitle = (e) => {
      setVideoTitle(e.target.value)
    }

    const handleChangeVideoDescription = (e) => {
      setVideoDescription(e.target.value)
    }

    const handleChangeVideoTags = (e) => {
      setVideoTags(e.target.value)
    }

    const getVideos = async () => {
      const result = await listAllVideos()
      setVideos(result)
    }

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    }

    useEffect(() => {
      getVideos()
    }, [])

    const handleSubtmit = async (e) => {
      e.preventDefault()
      const createNewVideo = {
        url: course_name,
        title: course_description,
        description: course_duration,
        tags: course_price,
       
      }
      await createVideo(createNewVideo)
      setVideos(getVideos())
    }

    return (
      <div>
        <Button
          onClick={handleOpen}
          style={{
            marginLeft: 5,
            backgroundColor: 'green',
            border: 'none',
            width: 135,
            height: 35,
            borderRadius: 5,
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          New Video
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ width: 300, marginLeft: 25 }}
            >
              Create Course Form
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ width: 300, marginTop: 4 }}
            >
              <form onSubmit={handleSubtmit}>
                <FormLabel sx={{ width: 300, marginLeft: 20 }}>Url</FormLabel>
                <TextField
                  type="text"
                  variant="outlined"
                  value={video_url}
                  onChange={handleChangeVideoUrl}
                  sx={{ width: 300, marginLeft: 20 }}
                />
                <FormLabel sx={{ width: 300, marginLeft: 20 }}>
                  Title
                </FormLabel>
                <TextField
                  type="text"
                  variant="outlined"
                  value={video_title}
                  onChange={handleChangeVideoTitle}
                  sx={{ width: 300, marginLeft: 20 }}
                />
                <FormLabel sx={{ width: 300, marginLeft: 20 }}>
                  Description
                </FormLabel>
                <TextField
                  type="text"
                  variant="outlined"
                  value={video_description}
                  onChange={handleChangeVideoDescription}
                  sx={{ width: 300, marginLeft: 20 }}
                />
                <FormLabel sx={{ width: 300, marginLeft: 20 }}>Tags</FormLabel>
                <TextField
                  type="text"
                  variant="outlined"
                  value={video_tags}
                  onChange={handleChangeVideoTags}
                  sx={{ width: 300, marginLeft: 20 }}
                />
                <button
                  type="submit"
                  style={{
                    marginTop: 15,
                    marginLeft: 340,
                    backgroundColor: 'purple',
                    border: 'none',
                    width: 120,
                    height: 35,
                    borderRadius: 5,
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}
                >
                  Send
                </button>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
    ) 
}

export default CreateVideoForm
