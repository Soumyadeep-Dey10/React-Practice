import React from 'react'

const Person = (props) => {
  return (
    <div>
        <li>Person name : {props.name}</li>
        <li>Person age : {props.age}</li>
    </div>
  )
}

export default Person