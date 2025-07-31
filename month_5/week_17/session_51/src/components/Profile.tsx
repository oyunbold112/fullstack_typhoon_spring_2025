import React from "react";

type Props = {
    width: string,
    height?: string // optional
    url: string
}


const Profile: React.FC<Props> = (props) => {
    return (
        <img src={props.url} alt="Tamhicin Melhii" width={props.width} height={props.height} />
    )
}

export default Profile;