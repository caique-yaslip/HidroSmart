import { settings } from "@/settings/settings";
// import Script from "next/script";
import "normalize.css";
import "@/styles/globals.scss";

import { frankRuhl, josefinSans, poppins, openSans } from "@/lib/fonts";

import type { Metadata } from "next";

import Topo from "@/partials/Topo";
import Rodape from "@/partials/Rodape";
import RodapeMobile from "@/partials/RodapeMobile";
import Form from "@/components/Home/Form";

const { title, description, keywords, canonical, openGraph, robots } = settings;

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title, // Usando o título do arquivo de configuração
  description, // Usando a descrição
  keywords, // Usando as palavras-chave
  alternates: {
    canonical, // URL canônica
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    url: openGraph.url,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
    siteName: openGraph.siteName,
    locale: openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: openGraph.images,
  },
  robots: robots,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>{/* GTM HEAD */}</head>
      <body
        className={`${frankRuhl.variable} ${poppins.variable} ${josefinSans.variable} ${openSans.variable}`}
      >
        {/* GTM BODY */}
        <Topo />
        {children}
        <Form />
        <Rodape />
        <RodapeMobile />
      </body>
    </html>
  );
}
