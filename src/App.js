import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Loader from "./components/Loader"
import Navigation from "./components/Navigation"
import NotFound from "./components/NotFound"
// import HomePage from "./components/HomePage"
// import MoviePage from "./components/MoviePage"
// import MovieDetailsPage from "./components/MovieDetailsPage"

import { lazy, Suspense } from "react"

const HomePage = lazy(() => import("./components/HomePage"))
const MoviePage = lazy(() => import("./components/MoviePage"))
const MovieDetailsPage = lazy(() => import("./components/MovieDetailsPage"))

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:movieId">
            <MovieDetailsPage/>
          </Route>
          <Route exact path="/movies" component={MoviePage} />
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
