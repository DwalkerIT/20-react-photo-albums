import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <nav className="album-nav">
      <ul>
        <li className="album-nav-item">
          <Link to="/">Home</Link>
        </li>
        {props.albums.map((album) => {
          return (
            <li key={"sidebar-" + album.id} className="album-nav-item">
              <Link to={"/albums/" + album.id}>{album.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
