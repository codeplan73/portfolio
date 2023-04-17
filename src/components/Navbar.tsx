import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery, Drawer, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SideBar from './SideBar'
import logo from '../assets/my_logo.png'
import { HashLink as Link} from 'react-router-hash-link';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:800px)')

  return (
   <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: '#fff', color:'#14213D' }}>
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '95%',
              margin: '0 auto',
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
              <Avatar alt="Profile Picture" src={logo} />
              </Link>
            </Typography>

            <Box
              sx={{
                display: { lg: 'flex', md: 'flex', xs: 'none' },
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <Typography>
                <Link smooth to="#about">About</Link>
              </Typography>
              <Typography>
                <Link smooth to="#skill">Skill</Link>
              </Typography>
              <Typography>
                <Link smooth to="#project">Projects</Link>
              </Typography>
              <Typography>
                <Link smooth to="#contact">Contact</Link>
              </Typography>
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
                style={{ outline: 'none' }}
                onClick={() =>
                  setMobileOpen((prevMobileOpen) => !prevMobileOpen)
                }
              sx={{
                display: { lg: 'none', md: 'none', xs: 'block' },
                mr: '-1.5rem',
              }}
            >
              <MenuIcon />
            </IconButton> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <div className="drawer">
      {isMobile && (
        <Drawer 
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen((previousMobileOpen) => !previousMobileOpen)}
          ModalProps={{ keepMounted:true }}
        >
          <SideBar />
        </Drawer>
      )}
    </div>
   </>
  )
}

export default Navbar
