import "@/styles/contratadas.scss";
import pagesData from "@/data/pagesData";
import Link from "next/link";
import TitlePage from "@/components/TitlePage";
import { Metadata } from "next";
import { settings } from "@/settings/settings";

const { siteName } = settings;

const title = "Mapa do Site";
const description = "Exemplo";
const keywords = "Exemplo";
const canonical = "mapa-site";

export const metadata: Metadata = {
  title: `${title} | ${siteName}`, // Undo o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
  },
  openGraph: {
    url: canonical,
    title: `${title} | ${siteName}`,
    description: description,
    images: [
      {
        url: "/logo.webp", // Imagem para Open Graph
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    type: "website",
  },
};

export default function MapaSite() {
  return (
    <>
      <TitlePage title={title} />

      <div className="mapaSite">
        <div className="base">
          <Link href="/" className="link-default">
            Home
          </Link>
          <Link href="/informacoes" className="link-default">
            Informações
          </Link>
          <Link href="/contato" className="link-default">
            Contato
          </Link>
          <ul className="pagesList">
            {pagesData.map((page) => (
              <li className="item" key={page.palavra}>
                <Link href={page.contratada}>{page.palavra}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
