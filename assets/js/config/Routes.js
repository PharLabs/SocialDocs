/*
 * This file is part of the SocialDocs project (c) 2015 - 2020
 * 
 * (c) Ben Bieler (Project Lead) <benjaminbieler2014@gmail.com>
 *
 * The Licence file can be found in the root of the directory
 */

"use strict";

import React                           from 'react';
import { Router, Route, hashHistory }  from 'react-router';
import HomeComponent                   from '../components/app/HomeComponent';
import NotFoundComponent               from '../components/NotFoundComponent';

/**
 * Routes config
 *
 * @author Ben Bieler <benjaminbieler2014@gmail.com>
 */
export default  (
    <Router history={hashHistory}>
        <Route path="/" component={HomeComponent}/>
        <Route path="*" component={NotFoundComponent}/>
    </Router>
);