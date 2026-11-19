"use client";
import { useMemo, useState } from "react";

const products = [
  { id: "burger", category: "Lanches", name: "Burger Prime", description: "Pão artesanal, blend grelhado, queijo e molho especial da casa.", price: "R$ 32,90", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85", alt: "Hambúrguer artesanal com queijo" },
  { id: "fries", category: "Acompanhamentos", name: "Batatas rústicas", description: "Batatas douradas, temperadas com ervas e servidas crocantes.", price: "R$ 18,90", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85", alt: "Porção de batatas fritas" },
  { id: "sandwich", category: "Lanches", name: "Sanduíche da casa", description: "Uma combinação especial de ingredientes frescos no pão tostado.", price: "R$ 27,90", image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=1000&q=85", alt: "Sanduíche artesanal" },
  { id: "salad", category: "Pratos", name: "Prato leve", description: "Mix de folhas, vegetais frescos e acompanhamentos selecionados.", price: "R$ 29,90", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85", alt: "Salada fresca colorida" },
  { id: "juice", category: "Bebidas", name: "Suco natural", description: "Bebida refrescante preparada com frutas selecionadas.", price: "R$ 12,00", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1000&q=85", alt: "Suco natural em copo" },
  { id: "dessert", category: "Sobremesas", name: "Doce especial", description: "Uma finalização delicada para deixar a experiência ainda melhor.", price: "R$ 16,90", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85", alt: "Sobremesa especial" }
];
const categories = ["Todos", "Lanches", "Acompanhamentos", "Pratos", "Bebidas", "Sobremesas"];

export default function DemoMenu() {
  const [active, setActive] = useState("Todos");
  const [message, setMessage] = useState("");
  const visible = useMemo(() => active === "Todos" ? products : products.filter(p => p.category === active), [active]);
  function addDemoItem(name: string) {
    setMessage(`${name} — interação demonstrativa`);
    window.setTimeout(() => setMessage(""), 2600);
  }
  return <section className="menu-section section-wrap" id="cardapio">
    <div className="section-kicker"><span>02 / NOSSA SELEÇÃO</span><i /></div>
    <div className="menu-heading"><div><span className="eyebrow">ESCOLHAS DA CASA</span><h2>Um convite ao <em>bom sabor.</em></h2></div><p>Conheça algumas opções que representam a proposta LanchesPrime.</p></div>
    <div className="demo-banner"><span className="demo-dot" /><p><strong>Cardápio demonstrativo.</strong> Produtos e valores fictícios, apenas para apresentação visual. Nenhum pedido real é realizado.</p></div>
    <div className="filter-row" aria-label="Filtrar produtos">{categories.map(category => <button type="button" key={category} onClick={() => setActive(category)} className={active === category ? "filter-chip active" : "filter-chip"}>{category}</button>)}</div>
    <div className="product-grid">{visible.map((item, index) => <article className="product-card" key={item.id}>
      <div className="product-photo"><img src={item.image} alt={item.alt} loading="lazy" /><span className="product-number">0{index + 1}</span><span className="product-label">EXEMPLO</span></div>
      <div className="product-info"><span className="product-category">{item.category}</span><div className="product-title-row"><h3>{item.name}</h3><span className="product-price">{item.price}</span></div><p>{item.description}</p><button type="button" className="product-action" onClick={() => addDemoItem(item.name)}>Experimentar interação <span>↗</span></button></div>
    </article>)}</div>
    {message && <div className="demo-toast" role="status">{message}</div>}
  </section>;
}
