import Image from "next/image";
import TitlePage from "@/components/TitlePage";
import "@/styles/index.scss";

const title = "Serviços";

const services = [
  {
    title: "Instalação hidráulica",
    description: "Projetos sob medida com componentes de alta resistência e eficiência.",
    image: "/banner/banner1.webp",
  },
  {
    title: "Manutenção preventiva",
    description: "Revisões programadas para garantir a vida útil e o desempenho dos sistemas.",
    image: "/banner/banner2.png",
  },
  {
    title: "Automação e controle",
    description: "Soluções inteligentes para monitorar e otimizar o consumo de água e energia.",
    image: "/imgs-contratadas/pagina-exemplo-01.webp",
  },
];

export default function Servicos() {
  return (
    <>
      <TitlePage title={title} variant="servicos" />
      <main className="servicos-page">
        <section className="servicos-intro">
          <h2>Nossos serviços</h2>
          <p>
            Oferecemos um portfólio completo para atender a sua demanda, com foco em qualidade e entrega confiável.
          </p>
        </section>

        <section className="servicos-list">
          {services.map((service) => (
            <article className="servicos-card" key={service.title}>
              <div className="servicos-card-image">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={520}
                  height={280}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
