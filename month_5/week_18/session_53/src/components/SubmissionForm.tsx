import React, { useState } from "react";

const SubmissionForm: React.FC = () => {

    const [username, setUserName] = useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert(`Submitting username: ${username}`)
        event.preventDefault()
    }
    return (
        <>
            <h3>OnSubmit Example</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName: </label>
                <input type="text" id="username" value={username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUserName(event.currentTarget.value)
                }}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default SubmissionForm;