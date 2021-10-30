import { useParams, Link, useRouteMatch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { Route } from "react-router-dom"
import Cast from './Cast'
import Reviews from './Reviews'

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    const { url } = useRouteMatch();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=42eba2050345b62282020883d06ba519&language=en-US`)
            .then((res) => { return res.data })
            .then((data) => {
                setMovieInfo(data)
            })
    }, [])

    const handleGoBack = () => {
        history.goBack()
    }

    return (
        <>
            <button type="button" onClick={handleGoBack} className="btn btn-primary hBack">
              &larr; Go back 
        </button>
            <div className="poster">
                <img width="25%" src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}></img>
                <div>
            <h2>{movieInfo.title} ({movieInfo.release_date})</h2>
            <p>User score: {movieInfo.vote_average}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h3>Genres</h3>
            <ul className="list-group list-group-horizontal">
                {movieInfo.genres && movieInfo.genres.map((genre, index) => {
                    return (
                        <li key={index} className="list-group-item">{ genre.name }</li>
                    )
                })}
            </ul>
            </div>
            </div>
            <hr />
            <h4>Additional information</h4>
            <ul>
                <li key="1">
                    <Link to={`${url}/cast`}>Cast</Link>
                </li>
                <li key="2">
                    <Link to={`${url}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <hr />
            <Route path="/movies/:movieId/cast">
                <Cast/>
            </Route>
            <Route path="/movies/:movieId/reviews">
                <Reviews/>
            </Route>
        </>
    )
}