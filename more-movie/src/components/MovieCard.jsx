/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import{Link} from "react-router-dom";
import styles from "./movieCard.css";
// import PropTypes from "prop-types";
function MovieCard({ movie }) {

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
     <Link to={"/movies/" + movie.id}>
       <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
     />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}

export default MovieCard;