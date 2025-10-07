import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from '../components/MovieCard.jsx';

function Favorites() {

  const {favorites} = useMovieContext();
  if(favorites){
    return <div className='favorites'>
      <h2>Favorites: </h2>
    <div className="movies-grid">
            {favorites.map((movie) =>
                // (movie) => (movie.title.toLowerCase().startsWith(searchQuery) &&
                
                (<MovieCard 
            movie={movie} 
            key={movie.id}/>)
            )}
        </div>
        </div>
  }
  return (
    <div className='favorites-empty'>
        <h2>
            No Favorites Yet
        </h2>
        <p>Start Adding Favorite movies...</p>
    </div>
  )
}

export default Favorites