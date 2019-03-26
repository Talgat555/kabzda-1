import React from 'react';
import {Switch} from 'react-router-dom';
import Header from './components/Header/header';
import './App.css';
import Config from './config';
import NavbarContainer from './components/Navbar/navbarContainer';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Config/>
                </Switch>
            </div>
        </div>
    );
}


export default App;