import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-10">Hello Next.js</h1>
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  );
}
