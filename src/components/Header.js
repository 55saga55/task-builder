import React from 'react'
import PropTypes from 'prop-types'
import "../index.css"
import Button from './Button'
import { useLocation } from 'react-router-dom'

export const Header = ({title,onAdd ,showAdd}) => {
const location = useLocation()   
  return (
    <header className='header'>
        <h1>{title}</h1>
        {
          location.pathname === "/" &&
        <Button color= {showAdd ? "#ff5c5c":"green"} text={showAdd ?"Close":"Add"} onClick = {onAdd}/>
        }
     </header>
  )

  
}
Header.defaultProps = {
  title:"hello"
}
Header.prototype =  {
  title:PropTypes.string
}