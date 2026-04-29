"use client";

import pagesData from "@/data/pagesData";
import Image from "next/image";

export default function OutrosAssuntos({ title }: { title: string }) {
  return (
    <div className="outros-assuntos">
      <h2>Outros assuntos relacionados a {title}</h2>
      <div className="outros-assuntos-list">
        {pagesData.map((page) => (
          <a key={page.contratada} href={`/${page.contratada}`} className="outros-assuntos-item">
            <Image
              src={`/imgs-contratadas/${page.contratada}-01.webp`}
              alt={page.title}
              width={300}
              height={200}
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <p>{page.palavra}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
