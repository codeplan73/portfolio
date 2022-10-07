import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import {Box, Typography, Divider} from '@mui/material'

const SideBar = () => {
  return (
    <Box sx={{
        display:'flex', flexDirection: 'column',gap:'1rem', width: '200px', padding:'1rem 0px'
    }}> 
        <Typography>
            <Link className='mobileLink' smooth to='#about'>About</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link className='mobileLink' smooth to='#skill'>Skill</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link className='mobileLink' smooth to='#project'>Project</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link className='mobileLink' smooth to='#contact'>Contact</Link>
        </Typography>
        <Divider/>
    </Box>
  )
}

export default SideBar