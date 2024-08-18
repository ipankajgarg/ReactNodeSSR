// const express = require('express');
// const React = require('react')
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default

import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";

import createStore from "./helpers/createStore";
var cors = require('cors')

const app = express();


 
app.use(cors())

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);
app.use(express.static("public"));

// app.get("*", (req, res) => {
//   const store = createStore(req);

//   console.log("print", req.path, matchRoutes(Routes, req.path));

//   const promises = matchRoutes(Routes, req.path)
//     .map(({ route }) => {
//       return route.loadData ? route.loadData(store) : null;
//     })
//     .map((promise) => {
//       if (promise) {
//         return new Promise((resolve, reject) => {
//           promise.then(resolve).catch(resolve);
//         });
//       }
//     });

//   console.log("promises", promises);

//   Promise.all(promises).then(() => {
//     const context = {};
//     const content = renderer(req, store, context);

//     if (context.url) {
//       return res.redirect(301, context.url);
//     }

//     if (context.notFound) {
//       res.status(404);
//     }

//     res.send(content);
//     //res.send("<div>hello</div>")
//   });
// });


app.get('/manifest',(req, res)=>{
console.log("sending mpd")
res.setHeader("Content-Type", "application/dash+xml");

  res.download('./public/manifest.mpd')

})
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
  console.log("Listening on port"+ PORT);
});
