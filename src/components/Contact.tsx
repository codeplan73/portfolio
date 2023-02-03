import React, { useState } from 'react'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { Box, Typography } from '@mui/material'
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const notify = () => toast.success("Your message was sent successfully !");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`${name} ${email} ${subject} ${message}`)

    notify()

    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '2rem',
        background: '#fff',
      }}
    >
      <Typography variant="h4">Contact Me</Typography>
      <Typography variant="body1" sx={{textAlign:'center'}}>
        I will be very happy to connect with you and work on your project throughout all stages of development.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          width: '80%',
          justifyContent: {lg:'space-between', xs:'center'},
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem',
          gap:'2rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <BsFillTelephoneInboundFill className="contact__icon" />
          <Typography variant="h6">Phone</Typography>
          {/* <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography> */}
          <Typography variant="body2">+2349168189258</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <AiOutlineMail className="contact__icon" />
          <Typography variant="h6">Email</Typography>
          {/* <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography> */}
          <Typography variant="body2">emmizy2015@gmail.com</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flex:1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            textOverflow: 'hidden'
          }}
        >
          <GoLocation className="contact__icon" />
          <Typography variant="h6">Location</Typography>
          {/* <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography> */}
          <Typography variant="body2">10 Iyeomon Lane, Agbonma Street, Ekenhuan Road, Benin City, Edo State, Nigeria</Typography>
          {/* <Typography variant="body2">No 10 Iye-Omon Lane, off Agbonma Street, Ekenhuan Road, Benin City Edo State</Typography> */}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { lg: 'row', md: 'column', xs:'column' },
          width: '80%',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <Box
          sx={{
            width: { lg: '50%', md:'100%', xs:'100%' },
            display: 'flex',
            flexDirection: 'column',
            gap:'1rem',
          }}
        >
          <input
            type="text"
            value={name}
            required
            placeholder="Firstname:"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            required
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="subject"
            value={subject}
            required
            placeholder="Subject:"
            onChange={(e) => setSubject(e.target.value)}
          />
        </Box>
        <Box sx={{
            width: { lg: '48%', md: '100%', xs:'100%' },
            display: 'flex',
            alignItems:'flex-start'
          }}>
          <textarea
            value={message}
            required
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Box>
          <button className="btn-submit" type="submit">
            Send Message
          </button>
      </Box>
    </Box>
  )
}

export default Contact
