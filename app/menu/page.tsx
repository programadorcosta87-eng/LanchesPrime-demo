import Navbar from "@/components/Navbar";
import DemoMenu from "@/components/DemoMenu";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return <><Navbar /><main className="menu-page"><div className="page-intro"><span className="eyebrow">FEITO PARA VOCÊ</span><h1>Nosso cardápio</h1><p>Uma seleção demonstrativa de sabores e combinações.</p></div><DemoMenu /><p className="demo-disclaimer">Demonstração: itens e valores ilustrativos. Nenhum pedido é enviado.</p></main><Footer /></>;
}
