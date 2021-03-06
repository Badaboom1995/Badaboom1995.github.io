import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import App from '../components/App.js'


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path='/' component={App} exact={true}/>
        </Switch>     
    </div>
    </BrowserRouter>
);

export default AppRouter
