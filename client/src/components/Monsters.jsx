import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';



const Monster = () => {

  const [monster, setMonsters] = useState({});
  const { monsterId } = useParams();

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/' + monsterId)
      .then(response => {
        setMonsters(response.data)
      })
      .catch(error => {
        setMonsters({ error: "These are not the droids you are looking for" })
      })
  }, [monsterId])

  return (
    <div>
      <div class="nav">
        <input id="search_for_anything" type="text" placeholder="   Search for cards..."></input>
        <ul class="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#" class="active">About</a></li>
          <li><Link to="/cards/shop"><p>Shop</p></Link></li>
          <li><a href="#">Help</a></li>
        </ul>
        <img id="cart" src="/images/cart-dark.png" alt="cart icon"></img>
      </div>
      <h1>MONSTERS</h1>
      <p> {monster.name} </p>
    </div>
  )
}

export default Monster;