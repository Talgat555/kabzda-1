import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/profile';
import {MessagePage} from './components/Dialogs/dialogs';
import News from './components/News/news';
import Music from './components/Music/music';
import Settings from "./components/Settings/settings";
import DialogsContainer from './components/Dialogs/Dialog/dialogContainer';
import MessagePageContainer from './components/Dialogs/NewMessage/messagePageContainer';


const Config = ({store}) => {
    return (
        <Fragment>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
            {/*<MessagePageContainer/>*/}
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </Fragment>
    )
}

export default Config;
