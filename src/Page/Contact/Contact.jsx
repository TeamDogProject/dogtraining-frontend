import React from 'react'
import './Contact.css'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [descriptionContactText, setDescriptionContactText] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeSurname = (e) => {
    setSurName(e.target.value)
  }

  const handleChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handleChangeUserPhone = (e) => {
    setUserPhone(e.target.value)
  }

  const handleDescriptionContactText = (e) => {
    setDescriptionContactText(e.target.value)
  }

  return (
    <div className="contactPage">
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '1%',
          border: '2px #088395 solid',
          marginTop: 5,
          justifyContent: 'center',
        }}
      >
        <CardHeader title="Contact Form"></CardHeader>

        <CardContent sx={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="dense"
                onChange={handleChangeName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Surname"
                variant="outlined"
                margin="dense"
                onChange={handleChangeSurname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="dense"
                onChange={handleChangeUserEmail}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                margin="dense"
                onChange={handleChangeUserPhone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional information: White here"
                variant="outlined"
                margin="dense"
                onChange={handleDescriptionContactText}
              />
            </Grid>
          </Grid>

          <Divider sx={{ paddingTop: 2 }} />

          <div className="politics">
            <Checkbox
              id="checkCons"
              name="politycs"
              checked={true}
            />
            <p className="consentimiento">
              Consiento el uso de mis datos para los fines indicados en la
              política de privacidad “SUS DATOS SEGUROS” disponibles en la web
              www.dogtraining.com*
            </p>
          </div>

          <div className="politics">
            <Checkbox
              id="informacion"
              name="información"
              checked={true}
            />
            <p className="consentimiento">
              Consiento el uso de mis datos personales para recibir publicidad
                de su entidad con opción a darme de baja en cualquier momento.*
              </p>
            </div>

            <p className="ContactBotton">
              <Button
                size="small"
                color="secondary"
                variant="contained"
                sx={{
                  fontFamily: 'roboto',
                  height: 50,
                  backgroundColor: '#088395',
                  borderTop: 2,
                  marginLeft: 2,
                  marginRight: 3,
                }}
              >
                Contact
              </Button>
            </p>
            <div>
            <Divider sx={{ paddingTop: 2, paddingBottom: 2 , marginBottom:2}} /> 
            </div>

            <Typography color="text.secondary" variant='h5'
            sx={{
              paddingBottomg: 1,
              color:'#088395',
              paddingTop: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              textAlign: 'center',
              marginBottom:3,
            }}
            >You can find us at 
            </Typography>


            <div className='iframeDiv'>
              <iframe  className='iframe'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.0781455550655!2d-15.431924561293483!3d28.141729959113768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40953f81279153%3A0xa4fd7a8fe1518a95!2sC.%20Luis%20Morote%2C%206%2C%2035007%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1682768005532!5m2!1ses!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="dataProtection">
              <Typography sx={{fontSize:'24',color:'inherit', fontWeight:'bold', textAlign:'center'}}> Información básica sobre la protección de datos </Typography>
              <p>
                <strong>Responsable del tratamiento</strong> Dog Training
              </p>
              <p>
                <strong>Finalidad</strong> Sus datos serán usados para poder
                atender sus solicitudes y prestarle nuestros servicios.
              </p>
              <p>
                <strong>Publicidad</strong> Solo le enviaremos publicidad con su
                autorización previa, que podrá facilitarnos mediante la casilla
                correspondiente establecida al efecto.
              </p>
              <p>
                <strong>Legitimación</strong> Únicamente trataremos sus datos
                con su consentimiento previo, que podrá facilitarnos mediante la
                casilla correspondiente establecida al efecto
              </p>
              <p>
                <strong>Destinatarios</strong> Con carácter general, sólo el
                personal de nuestra entidad que esté debidamente autorizado
                podrá tener conocimiento de la información que le pedimos.
              </p>
              <p>
                <strong>Derechos</strong> Tiene derecho a saber qué información
                tenemos sobre usted, corregirla y eliminarla, tal y como se
                explica en la información adicional disponible en nuestra página
                web. Así mismo, también podrá ejercer el derecho de
                Portabilidad, solicitando el traspaso de su información a otra
                entidad.
              </p>
              <p><strong>Información adicional</strong> para más información vaya
                al apartado "Política de privacidad” de nuestra página web.
              </p>
            </div>
          </CardContent>
        </Card>
       
    </div>
  )
}

export default Contact
