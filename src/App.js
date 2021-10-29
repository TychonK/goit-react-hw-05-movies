import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navigation from "./components/Navigation"
import HomePage from "./components/HomePage"
import MoviePage from "./components/MoviePage"
import NotFound from "./components/NotFound"
import MovieDetailsPage from "./components/MovieDetailsPage"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId">
          <MovieDetailsPage/>
        </Route>
        <Route exact path="/movies" component={MoviePage} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
