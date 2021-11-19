import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";


const ASpell = () => {

  const [spells, setSpells] = useState([]);
  const [spell, setSpell] = useState({});


  const { id } = useParams();
  // console.log(id)


  useEffect(() => {
    axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card/')
      .then(res => {
        setSpell(res.data.data[id])
        // console.log(res.data.data[0].name)
        // console.log(res.data.data[id])
      })
      .catch(err => console.log(err))
  }, []);



  return (
    <div className='background'>
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
      <h1>Card Name: {spell.name}</h1>
      <div className='container'>
        <div id="cardimg">
          {/* insert card image */}
          {/* {spell.card_images[0].image_url_small} */}
          {/* {console.log(spell.card_images)} */}
          {
            spell.card_images ? <img src={spell.card_images[0].image_url} height='500px' width='350px'></img> : "loading"
          }
        </div>
        <div id='rightside'>
          <h2>Card Description:</h2>
          <div id='description'>
            {/* insert card description */}
            {spell.desc}
          </div>
          <div>
            <div id='price'>
              Card Price:
              {
                spell.card_prices ? <p>${spell.card_prices[0].tcgplayer_price}</p> : "loading"
              }
              {/* {console.log(spell.card_prices[0].tcgplayer_price)} */}
            </div>
            <input type='number'></input>
            <button>Add to Cart</button>
          </div>

        </div>

      </div>

    </div>
  )
}

// background-image: url(""), background-size: cover

export default ASpell;