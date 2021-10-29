import axios from "axios"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"

export default function Cast() {
    const { movieId } = useParams();
    const [Cast, setCast] = useState();
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=42eba2050345b62282020883d06ba519&language=en-US`)
            .then((res) => { return res.data.cast })
            .then((cast) => {
                setCast(cast)
        })
    }, [])

    const castMarkup = Cast && Cast.map((person, index) => {
        return (
            <li key={index} className="card" width="18rem">
                <img class="card-img-top" src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{ person.original_name }</h5>
                    <p class="card-text">Character: { person.character }</p>
                </div>
            </li>
        )
    })
    
    return (
        <ul className="cast_list">
            { castMarkup } 
        </ul>
    )
}