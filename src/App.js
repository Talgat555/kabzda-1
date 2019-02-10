import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
         </div>  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;