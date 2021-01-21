import React from 'react';
import Row from './row';
import requests from './request';
import Banner from './banner';

function App() {
  return (
    <div className="app">
     <Banner />
     <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
     <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
     <Row title="COMEDY MOVIES" fetchUrl={requests.fetchCommedyMovies}/>
     <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
