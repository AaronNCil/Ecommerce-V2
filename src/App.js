import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import Product from './components/getProducts'
import HighToLow from './components/highToLow'
import LowToHigh from './components/lowToHigh'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Router >
   <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/HighToLow" element={<HighToLow />} />
          <Route path="/products/LowToHigh" element={<LowToHigh />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
  <Footer />
  </Router>
   </>
  );
}

export default App;
