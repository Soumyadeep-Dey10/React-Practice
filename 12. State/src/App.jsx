import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  
  //Basic counter
//   const incrementCount = () => {
//       setCount(count+1)
//   }

//   const decrementCount = () => {
//     setCount(count - 1)
// }

//updating arrays
  const [player, setPlayer] = useState(["Cole", "Enzo", "Moi"])
  const addPlayer = () => {
    setPlayer([...player, "Sancho"])
  }
  const removePlayer = () => {
    setPlayer(player.filter((f) => f !== "Sancho")) //if Sancho exists in player it i removed or nothing changes
  }
  const updateOne = () => {
    setPlayer(player.map((f) => (f === "Sancho" ? "James" : f)))
  }

  //updating object
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });
  return (
    
    <>
      {/* value is : {count}
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button> */}
{/* 
    <ul>
      {player.map((pl) => (
        <li key={Math.random()}>{pl}</li>
      ))}
    </ul>
        
      <button onClick={addPlayer}>ADD</button>
      <button onClick={removePlayer}>Remove</button>
      <button onClick={updateOne}>Update</button> */}

      <p>{movie.title}</p>
      <p>{movie.ratings}</p>
    </>
  )
}

export default App
