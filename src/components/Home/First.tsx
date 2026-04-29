"use client";

import Image from "next/image";
import Link from "next/link";

export default function First() {
  return (
    <>
      <div className="first">
        <div className="base">
          <div className="left">
            <div className="texto">
              <span>Tubos, conexões e acessórios hidráulicos</span>
              <h1>Materiais de qualidade para seu projeto hidráulico</h1>
              <p>
                Fornecemos tubos, conexões e peças sob medida para sistemas de
                água, esgoto, gás e indústrias. Temos soluções resistentes e com
                entrega rápida para obras e manutenções.
              </p>
              <div className="botoes">
                {/* <a href="/servicos">Ver catálogo</a> */}
                <Link href={'/servicos'}>Ver catálogo</Link>
                <Link href={'/contato'}>Solicitar orçamento</Link>
              </div>
            </div>
          </div>
          <div className="right">
            <Image
              src="/siteBase/futuristic-time-machine.jpg"
              alt="Description"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
