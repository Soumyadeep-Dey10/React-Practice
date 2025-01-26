import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
    if(loggedIn, isAdmin) return <div>Welcome Admin</div>
    else if(loggedIn, !isAdmin) return <div>Welcome User</div>
}

export default UserStatus