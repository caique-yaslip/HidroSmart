import "@/styles/contratadas.scss";
import pagesData from "@/data/pagesData";
import Image from "next/image";
import Link from "next/link";
import TitlePage from "@/components/TitlePage";
import { Metadata } from "next";
import { settings } from "@/settings/settings";

const { siteName } = settings;

const title = "Informações";
const description =
  "Saiba tudo sobre a Riviera de Santa Cristina XIII: localização, infraestrutura, lazer, imóveis exclusivos e tudo o que você precisa para viver momentos inesquecíveis.";
const keywords =
  "informações Riviera de Santa Cristina XIII, localização Riviera, infraestrutura, imóveis exclusivos, lazer e turismo, Represa de Jurumirim, qualidade de vida, viver na Riviera";
const canonical = "informacoes";

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

export default function Informacoes() {
  return (
    <>
      <TitlePage title={title} variant="info" />
      <div className="informacoes">
        <div className="base">
          <div className="cards">
            {pagesData.map((page) => (
              <div className="card" key={page.palavra}>
                <Link href={page.contratada}>
                  <Image
                    src={`/imgs-contratadas/${page.contratada}-01.webp`}
                    alt={page.palavra}
                    width={300}
                    height={190}
                  />
                  <p>{page.palavra}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
