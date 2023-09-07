
// eslint-disable-next-line no-unused-vars
import  MoviesGrid  from "../components/MoviesGrid";
import styles from "../components/App.css";
import {BrowserRouter as Router,Routes,  Route, Link} from "react-router-dom"
import  logo  from "../assets/logo.png";
import  peli  from "../assets/peli.png";
import  MovieDetails  from "../pages/MovieDetails.jsx";
import LandingPage from "../pages/landingPage.jsx";

function App() {
  return (
    <Router>
      <header className="headerMore">
          <Link to="/">
            <div className="headerMain">
              <img src={logo} alt={"logo"} className="logo" /></div>
          </Link>
        <div className="headerMovie"> 
        <h1 className={styles.title}></h1><div className="lupa"><input type="text" placeholder="BUSCAR POR NOMBRE"></input><button className="buscar">Buscar</button></div>
          <img src={peli} alt={"peli"} className="peli" />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:moviesId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <div className="footer">
  <h2>Cynthia Reátegui</h2>
</div>
    </Router>
  );
  }

      export default App;