// pages/api/create-post.js

import { MongoClient } from "mongodb";

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = "blog";

const client = new MongoClient(MONGODB_URI as string);

async function handler(req:any, res:any) {
  if (req.method === "POST") {
    try {
      console.log("Request body:", req.body);  // Log incoming data

      const { title, content } = req.body;

      await client.connect();
      const db = client.db(DB_NAME);

      const result = await db.collection("posts").insertOne({
        title,
        content,
        date: new Date().toISOString(),
      });

      res.status(200).json({ message: "Blog post created", postId: result.insertedId });
    } catch (error) {
      console.error("Error:", error);
    //   res.status(500).json({ message: "Failed to save blog post", error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

export default handler;
