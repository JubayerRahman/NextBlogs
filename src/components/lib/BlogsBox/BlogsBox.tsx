"use client"
import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Link from 'next/link';

function BlogsBox() {

    type PostType ={
        body: string,
        id: number,
        title: string,
        userId: number
      }
    
      const [post, setPosts] = useState<PostType[]>([])
    
      useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=> setPosts(res.data))
      },[])
  return (
    <div>
        {
          post.length> 0 ?
            post.map((post)=>(
              <Link key={post.id} href={`/Blogs/${post.id}`}>
                <div className="p-[10px] border-2 border-black rounded-md mb-[10px]">
                <h1 className='text-2xl font-bold'> {post.title}</h1>
                </div>
              </Link>
          ))
          :
          <h1 className='text-3xl font-bold'>Loading...</h1>
        }
    </div>
  )
}

export default BlogsBox