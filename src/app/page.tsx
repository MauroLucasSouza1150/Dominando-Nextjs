import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula de Nextjs",
  description: "Aprendendo Next.js e suas principais funções",
  openGraph: {
    title: "Home - Aula de Nextjs",
    description: "Aprendendo Next.js e suas principais funções",
    images: [
      "https://blogjavascript.com.br/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fblogjavascript%2F3ee315ca-b58e-470d-a944-972714f63ae8_3.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75",
    ],
  },
};

// Revalidate, Cache. ISR
export const revalidate = 60;

export default function Home() {
  const number = Math.random() * 10;

  return (
    <div>
      <h1>Hello World</h1>
      <p>Número Random: {number}</p>
    </div>
  );
}
