//Startup point for the client side application

import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';

//hydrate is similar to render the only difference is hydrate just attach events on the already rendered HTML 

ReactDom.hydrate(<Home/>,document.querySelector('#root'))
