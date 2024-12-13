"use client";

import { useEffect, useState } from "react";

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default function ClientComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Página do lado do Cliente</h2>

      <div className="flex flex-col gap-4 mx-4 mt-3">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-zinc-600 py-1 px-1 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
