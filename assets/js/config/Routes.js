/*
 * This file is part of the SocialDocs project (c) 2015 - 2020
 * 
 * (c) Ben Bieler (Project Lead) <benjaminbieler2014@gmail.com>
 *
 * The Licence file can be found in the root of the directory
 */

"use strict";

import React                           from 'react';
import {Router, Route, browserHistory} from 'react-router';
import HomeComponent                   from '../components/HomeComponent';


export default  (
    <Router history={browserHistory}>
        <Route component={HomeComponent} path="/" />
    </Router>
);