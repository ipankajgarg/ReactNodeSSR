//Startup point for the client side application

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios'
import { Provider } from "react-redux";
import {renderRoutes} from 'react-router-config'
import reducers from './reducers'
//hydrate is similar to render the only difference is hydrate just attach events on the already rendered HTML

//BrowserRoute doesn't work at server side because it has no address bar so it doesn't know about the routes

const axiosInstance = axios.create({
  baseURL:'/api'
})


const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
