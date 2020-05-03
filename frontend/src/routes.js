import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;
import Feed from './page/feed';
import Login from './page/login';
import Register from './page/register';
import Topics from './page/topics';
import SubTopics from './page/subtopics';
import Welcome from './page/welcome';
import Profile from './page/profile'
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component ={Welcome}/>
            <Route exact path = "/login" component ={Login}/>
            <Route exact path = "/feed" component ={Feed}/>
            <Route exact path = "/topics" component ={Topics}/>
            <Route exact path = "/subtopics" component ={SubTopics}/>
            <Route exact path = "/register" component ={Register}/>    
            <Route exact path = "/profile" component ={Profile}/>        
        </Switch>
    </BrowserRouter>
);

export default Routes;