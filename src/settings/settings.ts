import { SiteSettings } from "@/types";

const siteName = "Site Base";
const title = `Início | ${siteName}`;
const description = "Exemplo";
const keywords = "Exemplo";
export const url = "https://www.nomesite.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: true, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "5194-5715",
  whatsappApi: "https://api.whatsapp.com/send?phone=55115194-5715",
  numeroWhatsapp: "5194-5715",
  // email: "wesley@yaslip.com.br",
  // emailDestinatario: "wesley@yaslip.com.br",
  email: "atendimento@hidrosmartvp.com.br",
  emailDestinatario: "andersonmelo.yaslip@gmail.com",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/caH1G5Rs1tBdgBRw9",
    rua: "Rua dos Patriotas",
    numero: "725",
    cidade: "São Paulo",
    estado: "SP",
    cep: "04207-040",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5634247020407!2d-49.1179347!3d-23.404005899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c16b54bc792c4f%3A0xc9902ef74e192f3b!2sLand%20Santa%20Cristina%20III!5e0!3m2!1sen!2sbr!4v1741628245149!5m2!1sen!2sbr",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "logo.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};
