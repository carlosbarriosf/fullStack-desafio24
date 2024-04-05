import React from 'react'

function Button({type = 'button', action = () => {}, label, className}) {
  return (
    <button
        type={type}
        onClick={action} 
        className={className}   
    >
        {label}
    </button>
  )
}

export default Button