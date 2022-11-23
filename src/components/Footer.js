import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022</p>
        {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer