import Link from "next/link";
export default function Footer() {
  return <footer className="footer"><div className="footer-main"><Link href="/" className="brand">Lanches<span>Prime</span></Link><p>Sabor, qualidade e excelência em cada detalhe.</p><Link href="/menu" className="footer-link">Ver cardápio <span>↗</span></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LanchesPrime — Projeto demonstrativo.</span><span>Esta versão não recebe pedidos nem coleta dados de clientes.</span></div></footer>;
}
