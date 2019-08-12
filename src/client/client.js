//Startup point for the client side application

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes';
//hydrate is similar to render the only difference is hydrate just attach events on the already rendered HTML 

//BrowserRoute doesn't work at server side because it has no address bar so it doesn't know about the routes


ReactDom.hydrate(<BrowserRouter>
<Routes/>
</BrowserRouter>
    ,document.querySelector('#root'))
