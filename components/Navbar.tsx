"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav-shell" aria-label="Navegação principal">
    <Link href="/" className="brand" onClick={() => setOpen(false)}>Lanches<span>Prime</span></Link>
    <button className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}><i /><i /><i /></button>
    <div className={`nav-links ${open ? "is-open" : ""}`}>
      <Link href="/#inicio" onClick={() => setOpen(false)}>Início</Link>
      <Link href="/#sobre" onClick={() => setOpen(false)}>Sobre nós</Link>
      <Link href="/menu" onClick={() => setOpen(false)}>Cardápio</Link>
      <a className="nav-cta" href="/#cardapio" onClick={() => setOpen(false)}>Explorar sabores <span>↗</span></a>
    </div>
  </nav></header>;
}
