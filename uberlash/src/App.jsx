import { GlobalStyles } from './Components/Styles/GlobalStyles';
import { Header, NavBar, Header_Items, Logo_Container, Search_Container, Shopping_Cart, Main} from './Components/Styles/Styles';

function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Header>
        <Header_Items>
          
          <Search_Container>
            <input type="text" placeholder='BUSCAR'/>
          </Search_Container>

          <Logo_Container>
            <h2>UberLash</h2>
            <small>loja das lashes</small>
          </Logo_Container>

          <Shopping_Cart>
            <img src="src/Images/user.png" alt="Person Logo" />
            <img src="src/Images/shopping-cart.png" alt="Shopping Cart Logo" />
          </Shopping_Cart>
        </Header_Items>
        <NavBar>
          <div>
            <a href="">Inicio</a>
            <a href="">Produtos</a>
            <a href="">cilios</a>
            <a href="">Tratamentos</a>
            <a href="">Acessorios</a>
            <a href="">Pincas</a>
            <a href="">Adesivos e colas</a>
            <a href="">Marcas</a>
            <a href="">Kits</a>
            <a href="">Blog</a>
            <a href="">Rastreio</a>
          </div>
        </NavBar>
      </Header>

      <Main>
        
      </Main>
    </>
  )
}

export default App
