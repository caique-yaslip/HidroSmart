import Image from "next/image";
import Link from "next/link";
import { id } from "zod/locales";
import styles from "styles/index.scss";

export default function Home() {
  const produtos = [
    {
      id: 1,
      nome: "Gôndola de Loja",
      preco: "R$ 500",
      imagem: "/gondola.webp",
    },
    {
      id: 2,
      nome: "Prateleira",
      preco: "R$ 300",
      imagem: "/prateleira.webp",
    },
    {
      id: 3,
      nome: "Balcão",
      preco: "R$ 800",
      imagem: "/balcao.webp",
    },
  ];

   return (
    <main className="produtos-container">
      <h1 className="produtos-title">Meus Produtos</h1>

      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <h2 className="produtos-nome">{produto.nome}</h2>
            <p className="produtos-preco">{produto.preco}</p>
          </div>
        ))}
      </div>
    </main>
  );
}