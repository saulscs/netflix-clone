import React from 'react';
import requests from './Requests'
import Row from './Row';
import Nav from './Nav'
import Banner from './Banner'

import './App.css';

function App() {
    return (<div className="app">
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" isLargeRow
            fetchUrl={
                requests.fetchNetflixOriginals
            }/>
        <Row title="Trending Now"
            fetchUrl={
                requests.fetchTrending
            }/>
        <Row title="Top Rated"
            fetchUrl={
                requests.fetchTopRated
            }/>
        <Row title="Action Movies"
            fetchUrl={
                requests.fetchActionMovies
            }/>
        <Row title="Comedy Movies"
            fetchUrl={
                requests.fetchComedyMovies
            }/>
        <Row title="Horror Movies"
            fetchUrl={
                requests.fetchHorrorMovies
            }/>
        <Row title="Romance Movies"
            fetchUrl={
                requests.fetchRomanceMovies
            }/>
        <Row title="Documentaries"
            fetchUrl={
                requests.fetchDocumentaries
            }/>
    </div>);
}

export default App;
