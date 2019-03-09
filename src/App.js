import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs, { MessagePage } from './components/Dialogs/dialogs';
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import './App.css';




const App = ({ store }) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={store.getState()} />
      <div className='app-wrapper-content'>
        <Route exact path='/dialogs' render={ () => <Dialogs store={store} />} />
        <Route path='/profile' render={() => <Profile store={store} />} />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
        <Route path='/settings' render={ () => <Settings /> } />
        <MessagePage store={store}/>
      </div>
    </div>
  );
}


export default App;