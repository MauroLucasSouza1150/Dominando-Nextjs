// Loading - Streaming

import { PostProps } from "../../page";

export default async function PostInfo({ id }: { id: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostProps = await response.json();

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
