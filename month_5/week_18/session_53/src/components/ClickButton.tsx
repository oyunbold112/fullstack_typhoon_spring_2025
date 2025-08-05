import React from "react";


const ClickButton: React.FC = () => {

    const handleLoginClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Login Button Clicked. Value: ', event.currentTarget.value);

    }

    const handleSignupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Signup Button Clicked. Value: ', event.currentTarget.value)
    }
    return (
        <>
            <h3>On Click Example</h3>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleSignupClick}>Sign-Up</button>
        </>
    )
}



export default ClickButton;