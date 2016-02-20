/*
 *
 * This file is part of the SocialDocs project (c) 2015 - 2020
 *
 * (c) Ben Bieler (Project Leed) <benjaminbieler2014@gmail.com>
 * (c) Maximilian Bosch (Developer) <maximilian.bosch.27@gmail.com>
 *
 * The Licence file can be found in the root of the directory
 */

"use strict";

import reactDom from 'react-dom';
import routes   from './config/Routes';

reactDom.render(routes, document.getElementById('container'));