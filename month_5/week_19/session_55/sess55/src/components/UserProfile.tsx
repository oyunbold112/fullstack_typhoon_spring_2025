import React, { useState } from "react";

type User = {
    id: number,
    name: string,
    email: string,
}
// immutable state

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User>({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
    });
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            name: event.target.value
        })
    }

    return (
        <>
        <h2>User Profile</h2>
        <p>
            <strong>Name: </strong> {user.name}
            <strong>Name: </strong> {user.email}
        </p>
        <input type="text"
        value={user.name}
        onChange={handleNameChange}
        placeholder="Update Name"
        />
        </>
    )
}

export default UserProfile;