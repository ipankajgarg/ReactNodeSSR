// const express = require('express');
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default


import express from 'express';
import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes'
import renderer from './helpers/renderer'

import createStore from './helpers/createStore'



const app = express();

app.use(express.static('public'))

app.get('*',(req,res)=>{
    const store = createStore()


console.log( "print",req.path, matchRoutes(Routes,req.path))

const promises = matchRoutes(Routes,req.path).map(({route})=>{
   return route.loadData ? route.loadData(store):null
})


console.log("promises",promises)

res.send(renderer(req,store))

})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})