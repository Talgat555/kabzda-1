import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from './components/Settings/settings';
import './App.css';


const App = ({ state, addPost, updateNewPostText, addMessage, updateNewMessageText }) => {
  const { profilePage, dialogsPage, sidebar }= state;
  return (
    <BrowserRouter>  
      <div className='app-wrapper'>
      <Header />
      <Navbar state={sidebar} />
      <div className='app-wrapper-content'>
        <Route exact path='/dialogs' render={ () =>
            <Dialogs state={dialogsPage}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
            />}
        />
        <Route path='/profile' render={() =>
            <Profile state={profilePage}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
            />}           
        />
        <Route path='/news' render={ () => <News /> } />
        <Route path='/music' render={ () => <Music /> } />
        <Route path='/settings' render={ () => <Settings /> } />
        </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;