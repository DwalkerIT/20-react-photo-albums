import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Album from "./pages/Album";
import AlbumDetail from "./pages/AlbumDetail";

export default function App() {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route exact path="/" component={Album}></Route>
          <Route path="/albums/:id" component={AlbumDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}
