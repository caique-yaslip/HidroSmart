import Image from "next/image";
import Link from "next/link";

const suppliers = [
  {
    name: "AquaTech Tubos",
    role: "Tubos PVC e PEAD para água e esgoto",
    products: ["Tubos PVC", "Conexões 90°", "Joelhos"],
    image: "/banner/steel-pipelines-cables-plant.jpg",
    badge: "Especialista em tubos",
    highlights: ["Entrega rápida", "Linha completa"],
  },
  {
    name: "PipeMaster",
    role: "Conexões metálicas e plásticas de alta resistência",
    products: ["Uniões", "Tês", "Reduções"],
    image: "/banner/banner2.png",
    badge: "Fornecedor premium",
    highlights: ["Garantia estendida", "Peças técnicas"],
  },
  {
    name: "ConnectPro",
    role: "Acessórios e registros para instalação hidráulica",
    products: ["Registros", "Adaptadores", "Anéis de vedação"],
    image: "/banner/canos.jpg",
    badge: "Soluções completas",
    highlights: ["Atendimento dedicado", "Suporte técnico"],
  },
];

function CardServices() {
  return (
    <>
      <div className="supplier-grid">
        {suppliers.map((supplier) => (
          <div className="supplier-card" key={supplier.name}>
            <div className="card-media">
              <Image
                src={supplier.image}
                alt={supplier.name}
                width={520}
                height={320}
              />
              {/* <div className="card-badge">{supplier.badge}</div> */}
            </div>

            <div className="card-body">
              <h3>{supplier.name}</h3>
              <p>{supplier.role}</p>
            </div>

            <div className="card-footer">
              {/* <div className="supplier-highlights">
                {supplier.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div> */}
              <Link href="/pagina-exemplo">Ver produtos</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardServices;
