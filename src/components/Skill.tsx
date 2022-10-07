import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiRedux,
  SiMysql,
  SiMongodb
} from 'react-icons/si'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaGitSquare, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa'

const Skill = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Divider>
        <Typography variant="h4">
          <strong>Technical Skill</strong>
        </Typography>
      </Divider>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: {lg:'flex-start',xs:'center'},
          alignItems: 'center',
          gap: '2rem',
          margin: '0, auto',
          padding: '2rem',
          flexWrap:'wrap'
        }}
      >
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <AiOutlineHtml5 className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <DiCss3 className="skill__icons" />
        </Box>
        
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiJavascript className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiTailwindcss className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiReact className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiTypescript className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiRedux className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiMysql className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <BsBootstrapFill className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <FaGitSquare className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <FaPhp className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <FaNodeJs className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <FaLaravel className="skill__icons" />
        </Box>
        <Box
          sx={{
            display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: '.4rem', boxShadow:'9px 9px 9px rgba(0,0,0,0.1)',padding:'5px',
            borderRadius:'5px'
          }}
        >
          <SiMongodb className="skill__icons" />
        </Box>

      </Box>
    </Box>
  )
}

export default Skill
