import React from 'react';

// import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';




const Home = () => {


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
      <h1>It's time to... B-B-B-B-B-B-Buy some cards!!!</h1>
      <div className="menuCards">
        <div id="monsterCards">
          {/* insert an image of any card */}
          <Link to="/cards/monsters"><img id="card" src="/images/backOfCard.png" alt="backcard icon"></img></Link>
          <Link to="/cards/monsters"><p>Monsters</p></Link>
        </div>
        <div id="spellCards">
          {/* insert an image of any card */}
          <Link to="/cards/spells"><img id="card" src="/images/backOfCard.png" alt="backcard icon"></img></Link>
          <Link to="/cards/spells"><p>Spells</p></Link>
        </div>
        <div id="trapCards">
          {/* insert an image of any card */}
          {/* <img id="card" src="/images/backOfCard.png" alt="backcard icon" onMouseEnter={handleMouseEnter}></img> */}
          <Link to="/cards/traps"><img id="card" src="/images/backOfCard.png" alt="backcard icon"></img></Link>
          <Link to="/cards/traps"><p>Traps</p></Link>
        </div>
        <div id='shopNow'>
          <Link to="/cards/shop"><img id="card" src="/images/backOfCard.png" alt="backcard icon"></img></Link>
          <Link to="/cards/shop"><p>Shop</p></Link>
        </div>
        {/* <button>Shop Now</button> */}
      </div>
    </div>

  )
}

export default Home;
