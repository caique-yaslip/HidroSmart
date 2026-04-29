import TitlePage from "@/components/TitlePage";
import "@/styles/index.scss";

const title = "Sobre";

export default function Sobre() {
  return (
    <>
      <TitlePage title={title} variant="sobre" />
      <main className="sobre-page">
        <section className="sobre-intro">
          <h2>Quem somos</h2>
          <p>
            A HidroSmart é uma distribuidora especializada em soluções para
            condução de ar comprimido e redes hidráulicas, oferecendo os
            principais produtos do mercado com foco em qualidade, eficiência e
            confiança.
            <br />
            Mais do que uma promessa, a qualidade para a HidroSmart é uma
            garantia. Trabalhamos com linhas completas para atender às mais
            diversas aplicações industriais e prediais, sempre buscando entregar
            soluções inovadoras e altamente benéficas para cada projeto.
            <br />
            Com compromisso, excelência no atendimento e produtos de alto
            desempenho, a HidroSmart se destaca como parceira ideal para
            empresas e profissionais que buscam segurança e resultados
            duradouros.
          </p>
        </section>

        <section className="sobre-details">
          <div className="sobre-card">
            <h3>Experiência confiável</h3>
            <p>
              Mais de anos de experiência no mercado fornecendo materiais e
              serviços para projetos residenciais e comerciais.
            </p>
          </div>
          <div className="sobre-card">
            <h3>Parcerias fortes</h3>
            <p>
              Trabalhamos com fornecedores certificados para entregar produtos
              com garantia e alto desempenho.
            </p>
          </div>
          <div className="sobre-card">
            <h3>Atendimento dedicado</h3>
            <p>
              Oferecemos suporte especializado desde o primeiro orçamento até a
              instalação final.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
