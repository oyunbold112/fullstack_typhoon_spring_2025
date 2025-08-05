import React, { useState } from "react";

const LoginPage: React.FC = () => {
        // State
    const [isLoggedIn, setIsLoggedin] = useState<boolean>(false);
    const login = () => {
        setIsLoggedin(!isLoggedIn);
        console.log(isLoggedIn);
    }
    return <>
        <h1>LoginPage</h1>
        <button onClick={login}>{isLoggedIn ? 'Login' : 'Logout'}</button>
    </>
}

export { LoginPage }