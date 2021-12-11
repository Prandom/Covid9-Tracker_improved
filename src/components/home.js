import React from 'react';
import CountriesList from './countriesList';
import StateData from './stateData';
import Worldwidetotal from './worldwidetotal';
import './home.css'

function Home(){
    return (
        <div className="Home">
            <Worldwidetotal/>
            <StateData/>
            <CountriesList/>
        </div>
    );
}

export default Home;
