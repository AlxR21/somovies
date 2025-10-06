import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Good Will Hunting", release_date: 1997},
        {id: 2, title: "Ready Player One", release_date: 2018},
        {id: 3, title: "The Suicide Squad", release_date: 2021},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        
    };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search your Movie" className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map((movie) =>
                // (movie) => (movie.title.toLowerCase().startsWith(searchQuery) &&
                
                (<MovieCard 
            movie={movie} 
            key={movie.id}/>)
            )}
        </div>
    </div>
  )
}

export default Home