import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext.jsx';

function MovieCard({movie}) {
  const {isFavorite, addToFavorites, removeFavorite} = useMovieContext();
  const favorite = isFavorite(movie.id)


  function onLike(e){
    e.preventDefault()
    if(favorite)removeFavorite(movie.id)
    else addToFavorites(movie)
  }

  return (
   <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt= {`${movie.title}'s Poster`}/>
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite? "active" : ""}`} onClick={onLike}>
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
      </div>
   </div>
  )
}

export default MovieCard