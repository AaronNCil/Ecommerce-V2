import React from 'react'
import Slider from './slider'
import image1 from '../images/apple.jpg'
import image2 from '../images/headphone3.jpg'
import image3 from '../images/headphones.jpg'
import image4 from "../images/headrunning.jpg"


const Home = () => {
    return(
        <main class="wrapper-container">
        <div class="page-title">
          <h1>Immerse yourself In Quality</h1>
          <p>We strive to provide our customers with Hi-Quality headphones at an affordable price point.
              Sound too good to be true? Click the Explore button and see for yourself!</p>
          <a href="products.html" id="btn">EXPLORE</a>
      </div>
      
      <section class="col">
          <h2>MODELS</h2>
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
      <a class="btn" href="products.html">SHOP NOW!</a>
    </aside>
</main>
    )
}

export default Home