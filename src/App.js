import React from 'react';
import Row from './row';
import requests from './request';

function App() {
  return (
    <div>
     <h1>Application</h1>
     <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
