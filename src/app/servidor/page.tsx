// Server Component
import { Button } from "@/components/button";
import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function ServerComponent() {
  const response = await fetch("https://dummyjson.com/posts", {
    cache: "force-cache",
    next: {
      revalidate: 60,
    },
  });
  const data: ResponseProps = await response.json();

  console.log(data);

  // Eu posso usar o server action = usar componentes de reativação no meu server side
  async function handleClick() {
    "use server";

    console.log("Clicou");
  }

  async function handleSearchUsers(formData: FormData) {
    "use server";

    const userId = formData.get("userId");
    console.log(userId);
  }

  return (
    <div className="my-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Página do Lado do Servidor</h2>

      <Button />

      <button onClick={handleClick}>Clicou</button>

      <form className="flex gap-2 my-4" action={handleSearchUsers}>
        <input
          type="text"
          placeholder="ID do usuário"
          name="userId"
          className="px-2 py-1 text-zinc-800"
        />
        <button type="submit" className="bg-blue-600 py-1 px-2 rounded-md">
          Buscar Usuário
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-4 mt-3">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-zinc-600 py-1 px-1 rounded-md">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              className="text-blue-600 font-bold"
              href={`/servidor/${post.id}`}
            >
              Acessar Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
