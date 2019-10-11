import React from 'react';
import {Switch, withRouter} from 'react-router-dom';
import './App.css';
import Config from './config';
import NavbarContainer from './components/Navbar/navbarContainer';
import HeaderContainerAPI from "./components/Header/HeaderContainerAPI";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";


class App extends React.Component {

    componentDidMount(){
        this.props.initializeApp()
    };

    render(){
        if(!this.props.initialized) {
            return <Preloader />
        }

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
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);