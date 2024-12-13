import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-6xl font-bold text-red-600 mt-7">
        Página 404 Não Encontrada
      </h2>
      <p>Essa página que tentou acessar não existe!</p>

      <button className="bg-green-800 text-gray-100 py-2 px-2 mt-2 rounded-md">
        <Link href="/">Voltar para a Página Inicial</Link>
      </button>
    </div>
  );
}
