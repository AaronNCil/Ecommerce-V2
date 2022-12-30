import React from 'react'
import Slider from './slider'
import image1 from '../images/apple.jpg'
import image2 from '../images/headphone3.jpg'
import image3 from '../images/headphones.jpg'
import image4 from "../images/headrunning.jpg"
import {Link} from 'react-router-dom';


const Home = () => {
    return(
        <main class="wrapper-container">
        <div class="page-title">
          <h1>Immerse yourself In Quality</h1>
          <p>We strive to provide our customers with Hi-Quality headphones at an affordable price point.
              Sound too good to be true? Click the Explore button and see for yourself!</p>
              <Link to="/products" id='btn'>EXPLORE</Link>
      </div>
      
      <section class="col">
        <div class="col">
          <img src={image1} alt="model-img1"/>
          <img src={image2} alt="model-img2"/>
          <img src={image3} alt="model-img3"/>
          <img src={image4} alt="model-img4"/>
        </div>
      </section> 
        <Slider />
      <aside class="bottom-container">
        <div class="botton-modal">
          Shop now to experince the best quality headphones.
        </div>
        <Link to="/products" className='button'>EXPLORE</Link>
    </aside>
</main>
    )
}

export default Home