import  MovieCard  from "./MovieCard";
import movies from "./movies.json";
import  styles from "./MoviesGrid.css";

function MoviesGrid() {
  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
export default MoviesGrid;