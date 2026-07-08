import { Top_Footer, Infos, Bottom_Footer } from "./Styles/FooterStyles";
import instagramLogo from "../Images/instagram.png";
import visa from "../Images/CartoesLogo/visa@2x.png";
import mastercard from "../Images/CartoesLogo/mastercard@2x.png";
import amex from "../Images/CartoesLogo/amex@2x.png";
import dinnersclub from "../Images/CartoesLogo/diners@2x.png";
import aura from "../Images/CartoesLogo/aura@2x.png";
import elo from "../Images/CartoesLogo/elo@2x.png";
import hipercard from "../Images/CartoesLogo/hipercard@2x.png";
import discover from "../Images/CartoesLogo/discover@2x.png";
import boleto from "../Images/CartoesLogo/boleto@2x.png";
import pix from "../Images/CartoesLogo/pix@2x.png";
import envio from "../Images/CartoesLogo/4190@2x.png";

export default function Footer() {
  const pagamentos = [
    { img: visa, nome: "Visa" },
    { img: mastercard, nome: "Mastercard" },
    { img: amex, nome: "American Express" },
    { img: dinnersclub, nome: "Diners Club" },
    { img: aura, nome: "Aura" },
    { img: elo, nome: "Elo" },
    { img: hipercard, nome: "Hipercard" },
    { img: discover, nome: "Discover" },
    { img: boleto, nome: "Boleto" },
    { img: pix, nome: "Pix" },
  ];

  return (
    <footer>
      <Top_Footer>
        <div>
          Meios de pagamento
          {pagamentos.map((cartao) => (
            <img
              key={cartao.nome}
              src={cartao.img}
              alt={cartao.nome}
            />
          ))}
        </div>
        <div>
          Meios de envio
          <img src={envio} alt="envio" />
        </div>
      </Top_Footer>

      <Infos>
        <div>
          <h4>Institucional</h4>
          <a href="">Sobre nos</a>
          <a href="">Politica de privacidade</a>
          <a href="">Termos de uso</a>
          <a href="">Contato</a>
        </div>
        <div>
          <h4>Ajuda</h4>
          <a href="">Perguntas frequentes</a>
          <a href="">Envios e Prazos</a>
          <a href="">Trocas e Devolucoes</a>
          <a href="">Rastreamento de pedido</a>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <a href="Instagram.com">
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
        </div>
      </Infos>

      <Bottom_Footer>
        <small>
          Copyright UberLash - 57629729000149 - 2026. Todos os direitos
          reservados.
        </small>
      </Bottom_Footer>
    </footer>
  );
}
