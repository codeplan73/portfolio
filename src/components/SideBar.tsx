import React from 'react'
import { HashLink as Link} from 'react-router-hash-link';
import {Box, Typography, Divider} from '@mui/material'

const SideBar = () => {
  return (
    <Box sx={{
        display:'flex', flexDirection: 'column',gap:'1rem', width: '200px', padding:'1rem 0px'
    }}> 
        <Typography>
            <Link smooth to="#about" className="mobileLink">About</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link smooth to='#skill' className='mobileLink'>Skill</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link smooth to='#project' className='mobileLink'>Project</Link> 
        </Typography>
        <Divider/>
        <Typography> 
            <Link smooth to='#contact' className='mobileLink'>Contact</Link>
        </Typography>
        <Divider/>
    </Box>
  )
}

export default SideBar