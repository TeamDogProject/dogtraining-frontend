import React from 'react'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { useState, useCallback, useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { saveVideo } from '../../../../services/VideoService'

function EditVideoForm({show, close, videoId, videoUrl, videoTitle, videoDescription, videoTags}){
    console.log(videoId, videoUrl, videoTitle, videoDescription, videoTags)

    const [video_url, setVideoUrl] = useState('')
    const [video_title, setVideoTitle] = useState('')
    const [video_description, setVideoDescription] = useState('')
    const [video_tags, setVideoTags] = useState('')


    const handleClose = () => close()

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

    const handleSaveVideo = async (e) => {
      console.log(videoId)
      e.preventDefault()
      try {
        const obj = {}
        if (video_url) {
          obj.url = video_url
        }
        if (video_title) {
          obj.title = video_title
        }
        if (video_description) {
          obj.description = video_description
        }
        if (video_tags) {
          obj.tags = video_tags
        }
        
        await saveVideo( videoId, obj)
      } catch (error) {
        console.log(error)
      }
    }
return (
  <div>
    <Modal
      open={show}
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
          Edit Video Form
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ width: 300, marginTop: 4 }}
        >
          <form onSubmit={handleSaveVideo}>
            <FormLabel sx={{ width: 300, marginLeft: 20 }}>Url</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              placeholder={videoUrl}
              onChange={handleChangeVideoUrl}
              sx={{ width: 300, marginLeft: 20 }}
            />
            <FormLabel sx={{ width: 300, marginLeft: 20 }}>
              Title
            </FormLabel>
            <TextField
              type="text"
              variant="outlined"
              placeholder={videoDescription}
              onChange={handleChangeVideoDescription}
              sx={{ width: 300, marginLeft: 20 }}
            />
            <FormLabel sx={{ width: 300, marginLeft: 20 }}>Tags</FormLabel>
            <TextField
              type="text"
              variant="outlined"
              placeholder={videoTags}
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
              Save
            </button>
          </form>
        </Typography>
      </Box>
    </Modal>
  </div>
)

}

export default EditVideoForm