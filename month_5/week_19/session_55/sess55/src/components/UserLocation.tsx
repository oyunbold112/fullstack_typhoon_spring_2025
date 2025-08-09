import React, { useState } from "react";

type UserWithAdress = {
    id: number,
    name: string,
    address: {
        city: string,
        country: string
    }
}



const UserLocation: React.FC = () => {
    const [user, setUser] = useState<UserWithAdress>({
        id: 1,
        name: 'Jane doe',
        address: {
            city: "London",
            country: "Uk"
        }
    })

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: event.target.value
            }
        })
    }

    return (
        <>
        <h2>User Location</h2>
        <p>
            <strong>Name: </strong>{user.name}
        </p>
        <p>
            <strong>Location: </strong>{user.address.city}, {user.address.country}
        </p>
        <input type="text"
        value={user.address.city}
        onChange={handleCityChange}
        placeholder="Update City"
        />
        </>
    )
}

export default UserLocation;