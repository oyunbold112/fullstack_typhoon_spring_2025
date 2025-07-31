import React from "react";
import Profile from "./Profile";

const Gallery: React.FC = () => {
    return(
        // fragment
        <>
            <h1>Amazing profiles</h1>
            <Profile url="https://i.imgur.com/85Xxm5p.jpeg" width="215" height="200px"/>
            <Profile url="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg" width="315" height="200px"/>
            <Profile url="https://i.imgur.com/GZRR9Su.jpeg" width="315" height="400px"/>
        </>
    )
}

export default Gallery;