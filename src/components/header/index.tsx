import Link from "next/link";

export default function Header() {
  return (
    <header className="flex py-4 px-2 bg-zinc-500 text-gray-900 font-bold">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div>Next</div>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contatos">Contatos</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/servidor">Server</Link>
            </li>
            <li>
              <Link href="/cliente">Cliente</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
