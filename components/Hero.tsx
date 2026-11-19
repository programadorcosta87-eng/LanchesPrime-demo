import Link from "next/link";

export default function Hero() {
  return <section className="hero" id="inicio">
    <div className="hero-image" role="img" aria-label="Hambúrguer artesanal servido em uma mesa" />
    <div className="hero-shade" />
    <div className="hero-content">
      <span className="eyebrow hero-eyebrow"><span /> SABOR, QUALIDADE E EXPERIÊNCIA</span>
      <h1>O sabor que transforma <em>cada momento.</em></h1>
      <p>Uma experiência de gastronomia casual, feita para reunir bons sabores e boas histórias.</p>
      <div className="hero-actions"><Link href="/menu" className="button button-primary">Conheça o cardápio <span>→</span></Link><a href="#sobre" className="text-link">Conheça nossa história <span>↓</span></a></div>
      <div className="hero-foot"><span>LANCHES PRIME</span><span>QUALIDADE EM CADA DETALHE</span></div>
    </div>
    <div className="hero-index"><span>01</span><i /></div>
  </section>;
}
