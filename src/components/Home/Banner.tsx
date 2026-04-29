"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    title: "Tubos e conexões de alto desempenho",
    description:
      "Encontre tubos, conexões e acessórios para hidráulica industrial, construção e manutenção residencial com qualidade certificada.",
    image: "/banner/pessoa.png",
    alt: "Imagem de profissional trabalhando com tubos hidráulicos",
    button: { href: "/servicos", label: "Ver produtos" },
    className: "banner-1",
  },
  {
    title: "Fornecimento rápido e confiável",
    description:
      "Estoque renovado com peças hidráulicas e conexões flexíveis para obras, reformas e projetos técnicos de precisão.",
    image: "/banner/pessoa.png",
    alt: "Imagem de conexão hidráulica moderna",
    button: { href: "/contato", label: "Peça um orçamento" },
    className: "banner-2",
  },
  {
    title: "Suporte técnico especializado",
    description:
      "Nossa equipe ajuda a escolher tubos, registros e conexões ideais para cada aplicação, garantindo instalação segura e eficiente.",
    image: "/banner/pessoa.png",
    alt: "Imagem de técnico hidráulico em atendimento",
    button: { href: "/contato", label: "Fale com a equipe" },
    className: "banner-3",
  },
];

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <div
              className={`slide-item ${slide.className} ${
                activeSlide === index ? "active" : ""
              }`}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <div className="texto">
                <div className="slide-image">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={220}
                    height={220}
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href={slide.button.href}>{slide.button.label}</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
