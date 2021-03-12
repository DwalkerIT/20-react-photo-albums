import { useState, useEffect } from "react";

import Header from "./Header";
// import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Card from "./Card";

export default function AlbumDetail(props) {
  const id = props.match.params.id;
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState({ photos: [] });
  const [modalPhoto, setModalPhoto] = useState(null);
  const [index, setIndex] = useState(null);

  function handleIndexShift(e, index) {
    e.stopPropagation();
    setModalPhoto(album.photos[index]);
  }
  function handleClose() {
    setModalPhoto(null);
    setIndex(null);
  }

  useEffect(() => {
    console.log(album.photos, index);
    if (album.photos && index !== null) {
      setModalPhoto(album.photos[index]);
    }
  }, [index, album.photos]);

  useEffect(() => {
    fetch("http://localhost:3001/albums/")
      .then((r) => r.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/albums/" + id)
      .then((r) => r.json())
      .then((data) => {
        setAlbum(data);
      });
  }, [id]);

  console.log(album);
  return (
    <div className="page">
      <Header title={album.name}></Header>
      <div className="album-detail-main">
        <Sidebar albums={albums}></Sidebar>
        <div className="album-detail-grid">
          {album.photos
            ? album.photos.map((photo, index) => (
                <Card
                  key={photo.id}
                  onClick={() => setModalPhoto(photo)}
                  title={photo.name}
                  image={photo.thumbnail}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
