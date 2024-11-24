import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import Checkout from './components/Checkout/Checkout';
import SinglePage from './components/SinglePage/SinglePage';
import ShoppingCard from './components/ShoppingCard/ShoppingCard';
import Products from './components/Products/Products';

function App() {
  return (
    <div className='App'>
      <Router>
       <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/products/:id' element={<SinglePage />} />
          <Route path='/products' element={<Products  />} />
          <Route path='/shopping_card' element={<ShoppingCard/>} />
          <Route path='/checkout' element={<Checkout />} />
          {/* <Route path='/single' element={<SinglePage />} /> */}
        </Routes>
        <Footer />
      </Router> 
    </div>
  )
}

export default App;
