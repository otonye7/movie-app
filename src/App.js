import React from 'react';
import Row from './row';
import requests from './request';
import Banner from './banner';
import Nav from './nav';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner />
     <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
     <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
     <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
     <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
