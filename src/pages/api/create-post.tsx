import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    console.log("Received POST request");
    try {
      const { title, content } = req.body;
      console.log("Received title:", title);
      console.log("Received content:", content);

      if (!title || !content) {
        console.log("Missing title or content");
        return res.status(400).json({ message: 'Title and content are required' });
      }

      // Connect to the database
      await client.connect();
      const db = client.db("nextblog"); // Use your database name here
      const postsCollection = db.collection("posts");

      // Insert the blog post data into MongoDB
      const result = await postsCollection.insertOne({ title, content });
      console.log("Inserted blog post:", result);

      res.status(200).json({ message: 'Blog post created successfully!', data: result });
    } catch (error) {
      console.error("Error creating blog:", error);
    //   res.status(500).json({ message: "Internal Server Error", error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
