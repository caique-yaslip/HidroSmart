"use client";

import Image from "next/image";
import Link from "next/link";
import CardServices from "../CardService/CardService";



export default function Services() {
  return (
    <div className="services">
      <div className="base">
        <div className="services-intro">
          <span>Fornecedores</span>
          <h2>Conheça nossos parceiros e os produtos que oferecem</h2>
          <p>
            Cada fornecedor é selecionado para garantir qualidade, prazo e suporte técnico. Veja os principais produtos disponíveis para seu projeto.
          </p>
        </div>

        <div className="parallax-card">
          <div className="parallax-card__overlay">
            {/* <span>Parallax</span> */}
            <h3>Fornecedores premium com entrega confiável</h3>
            <p>Um card visual com texto centralizado e efeito suave de profundidade.</p>
          </div>
        </div>
        <CardServices/>
      </div>
    </div>
  );
}
