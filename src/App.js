import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
  <div className="App">
    <Nav />
    <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    <Row title="TOP RATED" fetchUrl={requests.fetchTopRatedMovies} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
  </div>
  );
}

export default App;


// https://netflix-clone-a59ca.web.app