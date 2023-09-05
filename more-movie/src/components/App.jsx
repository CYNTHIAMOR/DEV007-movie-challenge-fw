/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import  MoviesGrid  from "../components/MoviesGrid";
import styles from "../components/App.css";
import {BrowserRouter as Router,Routes,  Route, Link} from "react-router-dom"
import  logo  from "../assets/logo.png";
import  MovieDetails  from "../pages/MovieDetails.jsx";
import LandingPage from "../pages/landingPage.jsx";

function App() {
  return (
    <Router>
      <header>
     
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
        <div className="headerMovie">
          <div className="header">
            <img src={logo} alt={"logo"} className="logo" />
          </div>
  </div>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:moviesId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
  }

      export default App;