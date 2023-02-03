import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer>
      <h4>&copy; { date } Globe-Raven.</h4>
    </footer>
  )
}

export default Footer