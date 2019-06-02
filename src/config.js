import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import MessagePageContainerAPI from "./components/Dialogs/NewMessage/messagePageContainerAPI";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/musicContainer";
import NewsContainer from "./components/News/newsContainer";
import SettingsContainer from "./components/Settings/settingsContainer";
import ProfileContainer from "./components/Profile/profileContainer";
import DialogsContainerAPI from "./components/Dialogs/dialogsContainerAPI";


const Config = () => {
    return (
        <Fragment>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
            <Route exact path='/dialogs' render={() => <DialogsContainerAPI />} />
            <Route path='/messages/:userId?' render={() => < MessagePageContainerAPI />} />
            <Route path='/news' render={() => <NewsContainer/>}/>
            <Route path='/music' render={() => <MusicContainer />}/>
            <Route path='/settings' render={() => <SettingsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
        </Fragment>
    )
}

export default Config;
