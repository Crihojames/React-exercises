import React,{useState, useEffect} from 'react';
import axios from 'axios';

const FetchMultiplePosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setPosts(res.data)
        })
        .cath((err)=>{
            console.log(err)
        })
    })
    return (
        <div>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchMultiplePosts;