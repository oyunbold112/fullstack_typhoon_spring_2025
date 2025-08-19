import React, { useEffect, useState } from "react";

// ex01
// Fetch list gedeg component uusgeed tuuniigee 
// tuuniigee posts api-gaas ehnii 10 postiig
// awaad haruuldag bolgon uu

export function FetchList() {
    const [posts, setPosts] = useState<string[]>([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((result) => result.json())
        .then((data) => setPosts(data.map((p: { title: string }) => p.title)));
    },[])
    return <ul>
        {posts.map((p, i) => (
            <li key={i}>{p}</li>
        ))}
    </ul>
}

// ex02

export function RefreshRandomPost () {
    const [post, setPost] = useState<object>({})
    function handleOnclick () {
        let randomnumber = Math.floor(Math.random() * 100)
        fetch(`https://jsonplaceholder.typicode.com/posts/${randomnumber}`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            setPost(data)
        })
    }
    return (
        <div className="container">
            <button onClick={handleOnclick}>Fetch New Random Button</button>
            <h1>{post.title}</h1>
        </div>
    )
}

// ex03 

export function FetchBasedOnUserInput() {
    const [post, setPost] = useState<object>({})
    function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
        
    }
    return (
        <div className="container">
            <input type="text"
            onChange={handleOnChange}
            />
            <p>{post.title}</p>
        </div>
    )
}