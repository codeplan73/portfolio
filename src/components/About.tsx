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
            <strong>Nationality:</strong> Nigerian
          </Typography>
        </Box>
        <Box sx={{flex:{lg:2.9,xs:1}}}>
          <Typography variant='h5'>
            I'm a <span style={{color:'#346a8b'}}>Graphics/Web Designer</span>
          </Typography>
          <Typography variant='body1'>

            Ifeanyi Chukwuji is a talented graphic designer with 5 years of experience in creating impactful visual designs. Proficient in using industry-leading applications such as Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro and Corel draw. Ifeanyi excels in both print and digital media. His diverse portfolio encompasses branding, marketing materials, and web design. With a keen eye for detail and a strong foundation in design principles, Ifeanyi consistently delivers innovative solutions that elevate his clients' brand presence across various industries. 
            <br/>
          </Typography>

        </Box>
      </Paper>
    </Box>
  )
}

export default About
