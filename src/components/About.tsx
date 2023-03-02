import React from 'react'
import { Paper, Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Box sx={{ background: 'lightGrey', padding:'4rem 0px' }}>
        <Paper
        elevation={12}
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '1rem',
          padding: '2rem',
          margin:'0 auto'
        }}
      >
        <Box sx={{background:'#e9ecef', padding:'1rem', borderRadius:'5px', width:{lg:'25%',xs:'100%'}}}>
          <Typography variant='h5'>
            Personal Details
          </Typography>
          <hr/>
          <Typography variant='body2'>
            <strong>Email:</strong> Chukwujijoshuaifeanyi@gmail.com
          </Typography>
          <Typography variant='body2'>
            <strong>Language:</strong> English
          </Typography>
          <Typography variant='body2'>
            <strong>Nationality:</strong> Nigeria
          </Typography>
        </Box>
        <Box sx={{flex:{lg:2.9,xs:1}}}>
          <Typography variant='h5'>
            I'm a <span style={{color:'#346a8b'}}>Software Developer</span>
          </Typography>
          <Typography variant='body1'>

            A highly accomplished and result-oriented Software Developer with years of experience in full Stack development in JavaScript, React and Node.js Hands on experience in HTML, CSS, JavaScript and various front end technologies. Motivated team player knowledgeable in Analysis, Design, Development, Implementation, Testing, and Troubleshooting of web applications. Highly skilled and resourceful software engineer with a record of developing and supporting concurrent software projects and involved in JavaScript platforms and successful solution in software development. 
            <br/>
          </Typography>

        </Box>
      </Paper>
    </Box>
  )
}

export default About
