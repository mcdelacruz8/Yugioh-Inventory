import React from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {

  return (
    <div>
      <div className="nav">
        <input id="search_for_anything" type="text" placeholder="   Search for cards..."></input>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#" class="active">About</a></li>
          <li><Link to="/cards/shop"><p>Shop</p></Link></li>
          <li><a href="#">Help</a></li>
        </ul>
        <img id="cart" src="/images/cart-dark.png" alt="cart icon"></img>
      </div>
      <h1>Pretend this is a Shop pls :)</h1>
      <div id="meme">
        <img src="/images/trapcardmeme.jpeg"></img>
      </div>

    </div>
  )
}

export default Shop;