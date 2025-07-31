import React from "react";

interface UserStatusProps {
    isLoggedIn: boolean
}

const UserStatus: React.FC<UserStatusProps> = (props) => {
    const { isLoggedIn } = props
    console.log(props)
    return(
        <div>
            {
                isLoggedIn? <h2>Welcome Back!</h2> : <h2>Please Log in!</h2>
            }
        </div>
    )
}

export {UserStatus};
