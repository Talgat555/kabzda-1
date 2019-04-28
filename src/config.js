import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/profile';
import DialogsContainer from './components/Dialogs/dialogContainer';
import MessagePageContainer from "./components/Dialogs/NewMessage/messagePageContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/musicContainer";
import NewsContainer from "./components/News/newsContainer";
import SettingsContainer from "./components/Settings/settingsContainer";


const Config = () => {
    return (
        <Fragment>
            <Route path='/profile' render={() => <Profile/>} />
            <Route exact path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/dialogs/:id' render={() => < MessagePageContainer />} />
            <Route path='/news' render={() => <NewsContainer/>}/>
            <Route path='/music' render={() => <MusicContainer />}/>
            <Route path='/settings' render={() => <SettingsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </Fragment>
    )
}

export default Config;
