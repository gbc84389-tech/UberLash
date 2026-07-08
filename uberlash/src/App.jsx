import { GlobalStyles } from './Components/Styles/GlobalStyles';
import { Routes, Route } from "react-router-dom";
import Main from './Components/Pages/Main';
import Acessorios from './Components/Pages/Acessorios';
import Adesivo from './Components/Pages/Adesivos';
import Blog from './Components/Pages/Blog';
import Cilios from './Components/Pages/Cilios';
import Kits from './Components/Pages/Kits';
import Marcas from './Components/Pages/Marcas';
import Pincas from './Components/Pages/Pincas';
import Produtos from './Components/Pages/Produtos';
import Rastreio from './Components/Pages/Rastreio';
import Tratamentos from './Components/Pages/Tratamentos';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
    <GlobalStyles></GlobalStyles>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/cilios' element={<Cilios />} />
      <Route path='/tratamentos' element={<Tratamentos />} />
      <Route path='/acessorios' element={<Acessorios />} />
      <Route path='/pincas' element={<Pincas />} />
      <Route path='/adesivos' element={<Adesivo />} />
      <Route path='/marcas' element={<Marcas />} />
      <Route path='/kits' element={<Kits />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/rastreio' element={<Rastreio />} />
    </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
