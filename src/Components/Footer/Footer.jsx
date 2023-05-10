import './Footer.css'
import { Box, Grid, Container, Typography, Button, } from '@mui/material'
import { Link } from 'react-router-dom'



function Footer() {
  const elements = [
    {
      header: 'Side Map',
      links: [{name:'Home', url:'Home'}, {name:'About', url: 'About'}, {name:'Login', url:'Login'}, {name:'SignUp', url:'SignUp'}],
    }, 
  ]

  const elements2 = [
    {
      header: 'Siguenos',
      links: [
        { name: 'Facebook', url: 'https://www.facebook.com' },
        { name: 'Instagram', url: 'https://www.instagram.com' },
        { name: 'Linkedin', url: 'https://www.linkedin.com' },
      ],
    },
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column, idx) => {
      return (
        <Grid item xs={12} md={4} key={idx}>
          <Box borderBottom={1}>
            <Typography
              sx={{
                fontFamily: 'monospace',
                fontSize: 12,
                color: 'white',
                fontWeight: 'bold',
                padding: 1,
              }}
            >
              {column.header}
            </Typography>
          </Box>
          {column.links.map((link, idx) => {
            return (
              <Box key={idx}>
                <Link to={`/${link.url}`}>
                  <Button
                    sx={{
                      fontFamily: 'monospace',
                      fontSize: 9,
                      color: 'white',
                    }}
                  >
                    {link.name}
                  </Button>
                </Link>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements


  }

   function generateFooterElementsSocial() {
     const footerElementsSocial = elements2.map((column, idx) => {
       return (
         <Grid item xs={12} md={4} key={idx}>
           <Box borderBottom={1}>
             <Typography
               sx={{
                 fontFamily: 'monospace',
                 fontSize: 12,
                 color: 'white',
                 fontWeight: 'bold',
                 padding: 1,
               }}
             >
               {column.header}
             </Typography>
           </Box>
           {column.links.map((link, idx) => {
             return (
               <Box key={idx}>
                 <Typography
                   sx={{
                     fontFamily: 'monospace',
                     fontSize: 12,
                     color: 'white',
                     padding: 1,
                   }}
                 >
                   <a className="socialLink" href={`${link.url}`}>
                     {link.name}
                   </a>
                 </Typography>
               </Box>
             )
           })}
         </Grid>
       )
     })
     return footerElementsSocial
   }



  return (
    <footer className="footer">
      <Box
        sx={{
          marginBottom: 0,
          position: 'relative',
          bottom: 0,
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box bgcolor="#0A4D68" color="white" padding={1}>
          <Container>
            <Grid container columnSpacing={5}>
              {generateFooterElements()} {generateFooterElementsSocial()}
            </Grid>
          </Container>
        </Box>
        <Box
          textAlign={'center'}
          py={0.5}
          m={0}
          bgcolor="black"
          color={'white'}
        >
          <Typography sx={{ fontSize: 10 }}>
            © Reboot Academy 2022 - All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </footer>
  )


  
}

export default Footer
