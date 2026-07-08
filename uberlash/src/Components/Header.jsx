import { useState } from 'react';
import { NavBar, Header_Items, Logo_Container, Search_Container, Shopping_Cart} from './Styles/HeaderStyles';
import userLogo from "../Images/user.png";
import cartLogo from "../Images/shopping-cart.png";
import { Link } from 'react-router-dom';

export default function() {
  const [page, setPage] = useState("inicio")
    
    return (
       <header>
        <Header_Items>
          
          <Search_Container>
            <input type="text" placeholder='BUSCAR'/>
          </Search_Container>

          <Logo_Container>
            <h2>UberLash</h2>
            <small>loja das lashes</small>
          </Logo_Container>

          <Shopping_Cart>
            <img src={userLogo} alt="Person Logo" />
            <img src={cartLogo} alt="Shopping Cart Logo" />
          </Shopping_Cart>
        </Header_Items>
        <NavBar>
          <div>
            <Link to="/" >Início</Link>
            <Link to="/produtos" >Produtos</Link>
            <Link to="/cilios" >Cílios</Link>
            <Link to="/tratamentos" >Tratamentos</Link>
            <Link to="/acessorios" >Acessórios</Link>
            <Link to="/pincas" >Pinças</Link>
            <Link to="/adesivos" >Adesivos e Colas</Link>
            <Link to="/marcas" >Marcas</Link>
            <Link to="/kits" >Kits</Link>
            <Link to="/blog" >Blog</Link>
            <Link to="/rastreio" >Rastreio</Link>
          </div>
        </NavBar>
      </header> 
    )
}