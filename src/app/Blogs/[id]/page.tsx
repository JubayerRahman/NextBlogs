"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function BlogDetails() {
  const { id } : any = useParams(); // Get dynamic ID from URL
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Blog not found</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-lg mt-4">{post.body}</p>
      <a href="/" className="text-blue-500 mt-5 block">← Back to Home</a>
    </div>
  );
}
