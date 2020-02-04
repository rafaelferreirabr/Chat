import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../page/home/index';
import Chat from '../page/chat/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;