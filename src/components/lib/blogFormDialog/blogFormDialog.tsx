"use client";  // Make this a client component

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios"; // Import axios
// import "../../../app/api/create-post"

function BlogFormDialog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const SubmitBlog = async (e: any) => {
    e.preventDefault();

    // Send the form data to the API route to save to MongoDB using Axios
    try {
        console.log(title,content);
      const response = await axios.post("/api/create-post", {
        title,
        content,
      });

      // Check if the request was successful
      if (response.status === 200) {
        console.log("Blog Created:", response.data);
        // Optionally clear the form or handle success UI
        setTitle("");
        setContent("");
      } else {
        console.error("Failed to create blog:", response.data.message);
      }
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="ml-auto">
      <Dialog>
        <DialogTrigger>
          <Button className="ml-auto">Create a Blog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl mb-[10px]">What's on your mind?</DialogTitle>
            <form onSubmit={SubmitBlog} className="flex flex-col gap-2">
              <input
                className="text-xl p-[5px] border-2 border-black rounded-md"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="text-xl p-[5px] border-2 border-black rounded-md"
                name="content"
                rows={10}
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                className="bg-black w-full text-xl font-[600] text-white p-[5px] rounded-md cursor-pointer"
                type="submit"
                value="Submit"
              />
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BlogFormDialog;
