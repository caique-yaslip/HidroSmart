"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/partials/Topo/topo.scss";
import Image from "next/image";

const links = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    // apenas para ter referencia do site
    // url :https://hidrosmartvp.com.br/
    <>
      <header className={`hdr${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="hdr__logo">
            <Image
              src="/banner/logo.png"
              alt="Logo"
              width={220}
              height={70}
              priority
            />
          </Link>

          <nav className={`hdr__nav${open ? " open" : ""}`}>
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`hdr__link${pathname === l.to ? " act" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/informacoes" className="hdr__cta">
              +
            </Link>
          </nav>

          <button className="hdr__tog" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div
        className={`hdr__overlay${open ? " vis" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
