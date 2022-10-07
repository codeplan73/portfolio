import React from 'react'
import { Box, Typography } from '@mui/material'
import {RiComputerFill} from 'react-icons/ri'
import {GiPublicSpeaker} from 'react-icons/gi'
import {FaPaintBrush} from 'react-icons/fa'

const Services = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '2rem',
      background: '#f8f9fa',
    }}
  >
    <Typography variant="h4"><strong>Awesome Services</strong></Typography>
    <Box
      sx={{
        display: 'flex',
        width: '80%',
        justifyContent: {lg:'space-between', xs:'center'},
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem',
        gap:'2rem',
        paddingBottom:'3rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '0.5rem',
          boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',
          padding:'1rem',
          borderRadius:'10px',
          background:'#fff',
        }}
      >
        <RiComputerFill className='service-icon'/>
        <Typography variant="h6">Web Development</Typography> 
      </Box>
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '0.5rem',
            boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',
            padding:'1rem',
            borderRadius:'10px',
            background:'#fff',
        }}
      > 
        <GiPublicSpeaker className='service-icon'/>
        <Typography variant="h6">Digital Marketing</Typography> 
      </Box>
      <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '0.5rem',
            boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',
            padding:'1rem',
            borderRadius:'10px',
            background:'#fff',
        }}
      > 
        <FaPaintBrush className='service-icon' />
        <Typography variant="h6">Graphics Design</Typography> 
      </Box>
    </Box>

  </Box>
  )
}

export default Services