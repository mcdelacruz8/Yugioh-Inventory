import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Spell = () => {

  const [spells, setSpells] = useState([]);
  // const { spellId } = useParams();

  useEffect(() => {
    axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=spell%20card')
      .then(res => {
        setSpells(res.data.data)
        // console.log(res.data.data[0].name)
        console.log(res.data.data)
      })
    // .catch(error => {
    //   setSpell({ error: "These are not the droids you are looking for" })
    // })
  }, [])

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
      <h1>SPELLS</h1>
      {
        spells.map((spell, i) => {
          return (
            <Link to={"/cards/spells/" + i} key={i}>
              <p>Card Name: {spell.name}</p>
              {/* {JSON.stringify(spell.id)} */}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Spell;