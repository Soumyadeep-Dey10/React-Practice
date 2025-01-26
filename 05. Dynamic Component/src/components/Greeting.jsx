import React from 'react'

const Greeting = () => {
    const name = "Bond007"
  return (
    <div>
        <h1>The name is : {name} </h1>
        <p>Current date is : {new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default Greeting