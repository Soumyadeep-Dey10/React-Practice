import React from 'react'

const Greeting = ({time}) => {
  
  
       return time === "morning" ? (<div>Good Morning</div>) : (<div>Good Afternoon</div>)
   
  
}

export default Greeting