import React from "react";
import { useEffect, useState } from 'react'
import Header from './Header'
// import Card from './Card'
// import db from "../../db.json";

export default function Album(props) {
const [albums, seetAlbums]= useState([])
useEffect(() => {
    fetch ('http://localhost:3001/albums')
    .then(r => r.json())
    .then(data => {
        setAlbums(data)
    })
})

  let array = ["Iron man", "Black Panther", "Hulk", "Captain Marvel"];
  return (
    <div>
      Avengers
      {array.map((hero, index) => {
        return (
          <p>
            {index}
            {hero}
          </p>
        );
      })}
    </div>
  );
}
