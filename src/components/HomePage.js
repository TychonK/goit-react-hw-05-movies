import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

export default function HomePage() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=42eba2050345b62282020883d06ba519")
            .then((res) => { return res.data.results })
            .then((data) => { setFilms([...data]) })
    }, [])

    let markup

    markup = films.map((film, index) => {
        return (
            <li key={index} id={film.id}>
               <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
            </li>
        )
    })
      
    
    return (
        <>
            <h1>Trending Today:</h1>
            <ul>{ markup }</ul>
        </>
    )
}