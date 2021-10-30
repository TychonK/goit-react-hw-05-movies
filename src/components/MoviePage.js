import { useState, useEffect } from "react"
import axios from "axios"
import {Link, useRouteMatch, useHistory} from 'react-router-dom'

export default function MoviePage() {
    const [film, setFilm] = useState(null)
    const [markup, setMarkup] = useState(null)
    const { url } = useRouteMatch();
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault()
        let query = e.target.search.value;
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=42eba2050345b62282020883d06ba519&language=en-US&query=${query}`)
            .then((res) => {
                setFilm(res.data.results)
            })
    }

    useEffect(() => {
        if (!film) {
            return
        }
       setMarkup(film.map((film, index) => {
            return (
                <li key={index} id={film.id}>
                    <Link to={`${url}/${film.id}`}>{film.original_title}</Link>
                </li>
            )
          })
       )
    }, [film])

    const handleGoBack = () => {
        history.goBack()
    }

    

    return (
        <>
        <button type="button" onClick={handleGoBack} className="btn btn-primary hBack">
              &larr; Go back 
        </button>
        <form onSubmit={handleSubmit}>
            <input name="search" id="search" autoFocus className="form-control"></input>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
            <ul>{ markup }</ul>
        </>
    )
}