import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card-item" onClick={props.onClick}>
      {props.to ? (
        <Link className="card-item-link" to={props.to}>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <h2 className="card-title">{props.title}</h2>
        </Link>
      ) : (
        <>
          <div
            className="card-image"
            style={{ backgroundImage: `url(${props.image})` }}
          ></div>
          <h2 className="card-title">{props.title}</h2>
        </>
      )}
    </div>
  );
}
