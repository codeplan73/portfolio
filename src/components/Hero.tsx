import React from 'react'
import {
  Box,
  Paper,
  Typography,
  Avatar
} from '@mui/material'
// import profile from '../assets/ify-pic.jpeg'
import profile from '../assets/ify-pic.jpeg'
import { HashLink as Link} from 'react-router-hash-link';
const Hero = () => {
  return (
    <Paper className="hero">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap:'0.5rem',
          width: '60%',
          margin: '0 auto'
        }}
      >
        <Avatar alt="Profile Picture" src={profile} sx={{
          height:'150px', width:'150px', marginTop:'4rem', border:'3px solid #BFDBF7'
        }} />
        <Typography
        className="homeTitle"
          color="#fff"
          variant="h4"
          sx={{
            fontWeight: '700',
            fontFamily: 'times new roman',
            textAlign:'center'
          }}
        >
          I'm Chukwuji joshua ifeanyi
        </Typography>
        <Typography variant='body2' color='white' sx={{textAlign:'center'}}>
          I'm a Passionate <span style={{color:'#346a8b', fontWeight:'600'}}>Graphics/Web Designer</span>
        </Typography>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginTop:'1.5rem'}}>
          <button className="hero__btn">
            <Link smooth to="/#contact">Hire Me</Link>
          </button>
          <button className="hero__btn">
            Download CV
          </button>
        </Box>
      </Box>
    </Paper>
  )
}

export default Hero
