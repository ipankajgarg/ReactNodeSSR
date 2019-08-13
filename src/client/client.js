//Startup point for the client side application

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from './reducers'
//hydrate is similar to render the only difference is hydrate just attach events on the already rendered HTML

//BrowserRoute doesn't work at server side because it has no address bar so it doesn't know about the routes

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
