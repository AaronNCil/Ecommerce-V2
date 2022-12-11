import React from "react";
import {Link} from 'react-router-dom';


const Header = () => {
       return (
        <header>
        <nav> 
        <div class="nav-bar">
          <ul class = "top-container">
              <li id="title"><Link to='/'><i class="fa-solid fa-headphones-simple"> S w a v e s</i></Link></li>
              <li class="active"><Link to='/'>Home</Link></li>
              <li><Link to='/products'>Products</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li class="cart"><Link to='/'><i class="fa-solid fa-cart-shopping"></i></Link></li>
          </ul>
        </div>
      </nav>
      </header>
    ) 
}

export default Header