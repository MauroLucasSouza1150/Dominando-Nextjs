// Rotas Dinâmicas

import { Suspense } from "react";
import PostInfo from "./_components/post";

export default async function DetailsPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h2 className="text-2xl text-yellow-600 font-bold my-4 text-center">
        Detalhes do Post - {id}
      </h2>

      <Suspense fallback={<h1>Carregando ...</h1>}>
        <PostInfo id={id} />
      </Suspense>
    </div>
  );
}
