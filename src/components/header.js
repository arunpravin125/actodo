import React from 'react'

function Header(props) {
  return (
    <div >
        <h1 className="text text-3xl font-medium">Hello {props.name}</h1>
        <p>I help you managing your Activities : )</p>

      
    </div>
  )
}

export default Header
