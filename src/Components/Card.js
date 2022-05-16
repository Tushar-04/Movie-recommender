import React from 'react'
import './Card.css';
const img_api = "https://image.tmdb.org./t/p/w1280";
export default function Card(props) {
  return (
    <>
    <div className='movie-container'>
    {props.data.map(movie => (
        <>
          <div className='movie'>
            <img src={img_api + movie.poster_path} alt={movie.title} />
            <div className='movie-info'>
            <h3>{movie.title}</h3>
            <span>{movie.vote_average}</span>
            </div>
          </div>
        </>
      ))
      }
    </div>
      
    </>
  )
}
