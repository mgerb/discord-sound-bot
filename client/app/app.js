import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Wrapper from './Wrapper';
import Home from './pages/Home/Home';
import Soundboard from './pages/Soundboard/Soundboard';
import NotFound from './pages/NotFound/NotFound';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Wrapper}>
            <IndexRoute component={Home}/>
            <Route path="/soundboard" component={Soundboard}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
, document.getElementById('app'));