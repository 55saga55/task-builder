import React from 'react'
import PropTypes from 'prop-types'
const Button = ({color,text ,onClick}) => {
  return (
    <div>
        <button onClick={onClick} style={{backgroundColor : color}} className='btn'>{text}</button>
    </div>
  )
}
Button.defaultProps = 
{
    color:"black",
    text:"Add"
}

Button.prototype = {
    color:PropTypes.string,
    text:PropTypes.string,
    omClick:PropTypes.func
}
export default Button