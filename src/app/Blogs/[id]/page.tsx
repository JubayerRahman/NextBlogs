'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface BlogDetailsProps {
  params: { id: string };
}

function page({params}: BlogDetailsProps) {

  const [post, setPosts] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(res=> setPosts(res.data))
    setLoading(false)
  },[])

  console.log(post);
  

  return (
    <div className='w-full mt-[20px]'>
      <div className='p-[10px] border-2 border-black rounded-md w-[80%] mx-auto'>
        <h1 className='text-3xl font-bold'>{post?.title}</h1>
        <p>{post?.body}</p>
        <p className='text-3xl font-bold'>{loading? "Loading...": ""}</p>
      </div>
    </div>
  )
}

export default page