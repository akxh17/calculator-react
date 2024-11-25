import React from 'react'

function Key(props) {
  return (
        <button id={props.id} onClick={()=>props.handleClick(props.value)}>{props.value}</button>
  )
}

export default Key
