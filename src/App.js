import fetchUrl from "./requests";
import "./App.css";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={fetchUrl.fetchNetflixOriginals}
        isLargeImage
      />
      <Row title="Trending Movies" fetchUrl={fetchUrl.fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchUrl.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={fetchUrl.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchUrl.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchUrl.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchUrl.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={fetchUrl.fetchDocumentaries} />
    </div>
  );
}

export default App;
