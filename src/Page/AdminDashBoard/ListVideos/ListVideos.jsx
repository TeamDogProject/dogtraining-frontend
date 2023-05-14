import React, { useEffect, useState, useCallback } from 'react'
import { Grid, Typography } from '@mui/material'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { Box } from '@mui/material'
import api from '../../../services/config'
import CreateVideoForm from './CreateVideoForm/CreateVideoForm'
import EditVideoForm from './EditVideoForm/EditVideoForm'
import { listAllVideos } from '../../../services/VideoService'
import { Button } from '@mui/material'

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

const ListVideos = () => {
  const [refresh, updateState] = useState()
  const forceUpdate = useCallback(() => updateState({}), [])

  const [videos, setVideos] = useState([])

  const [showModal, setShowModal] = useState(false)
    const [showModalCreate, setShowModalCreate] = useState(false)

  const [videoId, setVideoId] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [videoTags, setVideoTags] = useState('')

  const handleOpen = (
    videoId,
    videoUrl,
    videoTitle,
    videoDescription,
    videoTags
  ) => {
    setShowModal(true)
    setVideoId(videoId)
    setVideoUrl(videoUrl)
    setVideoTitle(videoTitle)
    setVideoDescription(videoDescription)
    setVideoTags(videoTags)
  }

  const handleOpenCreate = () => {
    setShowModalCreate(true)
  }

  const handleCloseCreate = () => {
    forceUpdate()
    setShowModalCreate(false)
  }

  const handleClose = () => {
    forceUpdate()
    setShowModal(false)
  }

  const getVideos = async () => {
    const result = await listAllVideos()
    setVideos(result)
  }

  useEffect(() => {
    getVideos()
  }, [refresh])

  const deleteVideo = async (id) => {
    try {
      const { data } = await api.delete(`/videos/${id}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      })
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id))
      return data
    } catch (error) {
      console.log(error)
    }
  }

  function displayVideos() {
    return (
      <>
        <EditVideoForm
          close={handleClose}
          show={showModal}
          videoId={videoId}
          videoUrl={videoUrl}
          videoTitle={videoTitle}
          videoDescription={videoDescription}
          videoTags={videoTags}
        />
        <CreateVideoForm 
          closeCreate={handleCloseCreate}
          showCreate={showModalCreate}
        />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Typography sx={{ fontWeight:'bold',fontSize:20, position:'absolute' }} color="white" marginLeft={2}>
                List Videos
              </Typography>
            </Box>
            <div>
          <Button
  variant="contained"
  onClick={handleOpenCreate}
  sx={{
    borderRadius: 2,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'green',
    height: 'auto',
    m: 'auto',
    mt: 0,
    mb: 1,
    display: 'block',
    left:'auto',
    marginRight:'50px'
  }}
>
  New Video
</Button>
                    </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Typography
                      variant="h6"
                      style={{
                        color: 'white',
                        fontSize: 17,
                        marginLeft: 15,
                      }}
                    >
                      <div>
                        <CreateVideoForm />
                      </div>
                    </Typography>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        ID
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        URL
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        TITLE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        DESCRIPTION
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        TAGS
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h6"
                        style={{ color: 'white', fontSize: 17 }}
                      >
                        Actions
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {videos?.length > 0 &&
                    videos.map((video) => (
                      <TableRow key={video.id}>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {video.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {video.url}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {video.title}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {video.description}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="h6"
                            style={{ color: 'white', fontSize: 17 }}
                          >
                            {video.tags}
                          </Typography>
                        </TableCell>
                        <TableCell style={{ color: 'white', fontSize: 17 }}>
                          <div>
                            <Button
                              onClick={() =>
                                handleOpen(
                                  video.id,
                                  video.url,
                                  video.title,
                                  video.description,
                                  video.tags
                                )
                              }
                              style={{
                                backgroundColor: 'lightgray',
                                width: '90px',
                                height: 'auto',
                                borderRadius: 8,
                                color: 'black',
                                fontSize: 15,
                                fontWeight: 'bold',
                                margin:2,
                                left:'auto'
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => deleteVideo(video.id)}
                              style={{
                                marginLeft: 105,
                                width: '90px',
          height: 'auto',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 'bold',
          margin:2,
          left:'auto',
          backgroundColor:'red',
          color:'white'
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </>
    )
  }

  return <div>{displayVideos()}</div>
}

export default ListVideos
