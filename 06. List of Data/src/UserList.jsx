import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
    <div>
        {users.map((user) => {
            return(
            <ul key={user.id}>
                <li>User name : {user.name}</li>
                <li>User age : {user.age}</li>
            </ul>
            )    
        }) }
    </div>
  )
}

export default UserList