import React from "react";
import {Link} from 'react-router-dom';


const Header = () => {
       return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a href="/" class="navbar-brand"><i class="fa-solid fa-headphones-simple"> S w a v e s</i></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to='/products' class="nav-link">Products</Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ) 
}

export default Header