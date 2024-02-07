import Link from "next/link";
import ProductPage from "./components/ProductPage";

export default function Home() {
  return (
    <main>
      <h1>Bienvenidos a mi App Next.js</h1>
      <Link href="/users">Link a usuarios</Link>
      <ProductPage />
    </main>
  );
}
