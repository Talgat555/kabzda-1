import React from 'react';
import {Switch} from 'react-router-dom';
import './App.css';
import Config from './config';
import NavbarContainer from './components/Navbar/navbarContainer';
import HeaderContainerAPI from "./components/Header/HeaderContainerAPI";


const App = () => {
    return (
        <div className='app-wrapper'>
            <div className='header'>
                <HeaderContainerAPI/>
            </div>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Config />
                </Switch>
            </div>
        </div>
    );
}


export default App;