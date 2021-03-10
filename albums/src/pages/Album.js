import React from "react";
import { useEffect, useState } from 'react'
import Header from './Header'
import Card from './Card'
// import db from "../../db.json";

export default function Album(props) {
const [albums, setAlbums]= useState([])
useEffect(() => {
    fetch ('http://localhost:3001/albums')
    .then(r => r.json())
    .then(data => {
      console.log(data)
        setAlbums(data)
    })
})

  // let array = ["Iron man", "Black Panther", "Hulk", "Captain Marvel"];
  return 
    <div>
      <Header title="My Avengers Albums"></Header>
      {/* {albums.map(album => <p> key={'album-' + album.id}>{album.name}</p>)} */}
      <div className="card-grid">
        {albums.map(album => (
          <Card
              key={album.id}
              title={album.name}
              image={album.thumbnail}
              to={'/albums/' + album.id} />  
          ))}
      </div>
    </div>
}
