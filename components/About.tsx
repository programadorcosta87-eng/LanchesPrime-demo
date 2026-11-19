const highlights = [
  { number: "01", title: "Qualidade premium", text: "Ingredientes selecionados e atenção aos detalhes em cada preparo." },
  { number: "02", title: "Feito com cuidado", text: "Combinações pensadas para valorizar o sabor e a experiência." },
  { number: "03", title: "Hospitalidade", text: "Um ambiente acolhedor para aproveitar bons momentos." },
];

export default function About() {
  return <section className="about section-wrap" id="sobre">
    <div className="section-kicker"><span>01 / SOBRE NÓS</span><i /></div>
    <div className="about-grid"><div><span className="eyebrow">MAIS QUE UMA REFEIÇÃO</span><h2>Paixão pelo sabor.<br /><em>Compromisso com você.</em></h2></div>
    <div className="about-copy"><p>Bem-vindo ao <strong>LanchesPrime</strong>, uma proposta de gastronomia casual que une sabor, qualidade e cuidado em cada detalhe.</p><p>Nossa ideia é transformar uma pausa no dia em um momento especial — seja para uma refeição rápida ou para compartilhar com quem você gosta.</p></div></div>
    <div className="highlight-grid">{highlights.map(item => <article className="highlight-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </section>;
}
