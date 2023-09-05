import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import  "../components/MoviesGrid.css";

function MoviesGrid() {
  return (
    <ul className={MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
export default MoviesGrid;