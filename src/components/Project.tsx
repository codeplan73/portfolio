import React from 'react'
import api from './../assets/api.jpeg'
import booking from './../assets/booking.jpeg'
import ecommerce from './../assets/ecommerce.jpeg'
import school from './../assets/school.png'
import youtube from './../assets/youtube-clone.jpeg'
import {
  Box,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        gap: '1rem',
        background: '#f8f9fa',
      }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        My Work & Portfolio
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center' }}>
        This Portfolio showcases some of my major personal project excluding contributions made to other projects and tream project as well.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '1.5rem',
          width: '80%',
          margin: '2rem 0',
          flexWrap: 'wrap',
        }}
      >
        


        <Card sx={{ maxWidth:280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={school}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                School Management System
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stack
              </Typography>
              <Chip label="Html" sx={{ margin:'3px'}} />
              <Chip label="Css" sx={{ margin:'3px'}} />
              <Chip label="JavaScript" sx={{ margin:'3px'}} />
              <Chip label="Php/MySQL" sx={{ margin:'3px'}} />
              <Chip label="Bootstrap" sx={{ margin:'3px'}} />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://alamincollege.com/">Live/Demo</a>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={booking}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Cleaning Booking System
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stack
              </Typography>
              <Chip label="HTML" sx={{ margin:'3px'}} />
              <Chip label="CSS" sx={{ margin:'3px'}} />
              <Chip label="JavaScript" sx={{ margin:'3px'}} />
              <Chip label="Php/MySQL" sx={{ margin:'3px'}} />
              <Chip label="BootStrap" sx={{ margin:'3px'}} />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://linostouch.com">Live/Demo</a>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={youtube}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Youtube Clone
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stack
              </Typography>
              <Chip label="React" sx={{ margin:'3px'}} />
              <Chip label="Redux Toolkit" sx={{ margin:'3px'}} />
              <Chip label="React Router" sx={{ margin:'3px'}} />
              <Chip label="RapidAPI" sx={{ margin:'3px'}} /> 
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://beautiful-sherbet-49c728.netlify.app/">Live/Demo</a>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={api}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ecommerce API
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stack
              </Typography>
              <Chip label="Node" sx={{ margin:'3px'}} />
              <Chip label="ExpressJs" sx={{ margin:'3px'}} />
              <Chip label="MongoDB" sx={{ margin:'3px'}} />
              <Chip label="Heroku" sx={{ margin:'3px'}} /> 
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://ecommerce-app-cps.herokuapp.com/">Live/Demo</a>
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth:280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ecommerce}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Ecommerce Web App
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Stack
              </Typography>
              <Chip label="React" sx={{ margin:'3px'}} />
              <Chip label="NodeJs" sx={{ margin:'3px'}} />
              <Chip label="React-Router" sx={{ margin:'3px'}} />
              <Chip label="Express" sx={{ margin:'3px'}} />
              <Chip label="MongoDB" sx={{ margin:'3px'}} />
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href="https://react-course-comfy-sloth-store.netlify.app">Live/Demo</a>
            </Button>
          </CardActions>
        </Card>
         
      </Box>
    </Box>
  )
}

export default Project
