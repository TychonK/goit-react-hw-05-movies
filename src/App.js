import './App.scss';
import { BrowserRouter, Route } from "react-router-dom"

import Navigation from "./components/Navigation"
import HomePage from "./components/HomePage"
import MoviePage from "./components/MoviePage"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
       <Route exact path="/" exact component={HomePage} />
    </BrowserRouter>
  );
}

export default App;
