import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=42eba2050345b62282020883d06ba519&language=en-US&page=1`)
            .then((res) => { return res.data.results })
            .then((data) => {
                setReviews(data)
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
    }, [])

    let reviewsMarkup
    if (reviews.length === 0) {
        reviewsMarkup = <p>There is no reviews for this film yet</p>
    } else {
        reviewsMarkup = reviews.map((review, index) => {
        return (
            <li key={index}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>
        )
      })
    }
        
    return (
        <ul>
            {reviewsMarkup}
        </ul>
    )
}