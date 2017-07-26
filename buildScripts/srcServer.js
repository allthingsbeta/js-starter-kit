
// ES5

// var express = require('express'),
//   path = require('path'),
//   open = require('open');


// ES6
  import express from 'express';
  import path from 'path';
  import open from 'open';

  import webpack from 'webpack';
  import config from '../webpack.config.dev';

  const PORT = 30000;
  var app = express();

  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath: config.output.publicPath
  }));

  app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname , "../src/index.html"));
  });


  app.listen(PORT,function(err){
    if(err) {
      console.log('Server Broke while trying to Spin , Reason = ' + err);
    }
    else
      {
        console.log('Server Spinning @ port' + PORT);
        open('http://localhost:30000');
      }
  });
