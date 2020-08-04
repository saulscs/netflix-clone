import React from 'react';
import requests from './Requests'
import Row from './Row';

import './App.css';

function App() {
    return (
        <div className="app">
            <h1>funciona</h1>
            <Row title="NETFLIX ORIGINALS"
                fetchUrl={
                    requests.fetchNetflixOriginals
                }/>
            <Row title="Trending Now"
                fetchUrl={
                    requests.fetchTrending
                }/>
        </div>
    );
}

export default App;
