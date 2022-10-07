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
          alignItems: 'center',
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
          Diligent software engineer with 3+ years of experience in commercial application and software development. Eager to build innovative and cutting-edge business solutions for the impressive suite of clients within its global reach. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion. Also identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.
          </Typography>

        </Box>
      </Paper>
    </Box>
  )
}

export default About
