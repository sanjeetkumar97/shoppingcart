var ShirtModel = require('../models/shirt');
var JeansModel = require('../models/jeans');
var ShoeModel = require('../models/shoe');
var SareeModel = require('../models/saree');
var KurtiModel = require('../models/kurti');
var SandleModel = require('../models/sandle');
var BoyModel = require('../models/boy');
var GirlModel = require('../models/girl');

var express = require('express');
var router = express.Router();

router.route('/api/hint').post(function(req,res){
  var shint = req.body.hint;
 // var pattern = /+stext+/i;
  var pattern = new RegExp(shint,"i");
  var hints = [];

  ShirtModel.find(function(err,shirts){
    for(var i = 0;i<2;i++){
      var shirt = shirts[i];
      if(pattern.test(shirt.name)){
       // console.log('matching in shirt collection'); 
        hints.push(shirt);
      }
    }
  });

  JeansModel.find(function(err,jeanses){
    for(var i = 0;i<2;i++){
      var jeans = jeanses[i];
      if(pattern.test(jeans.name)){
       // console.log('matching in jeans collection');
        hints.push(jeans);
      }
    }
  // return res.send(results);
  });

  ShoeModel.find(function(err,shoes){
    for(var i = 0;i<2;i++){
      var shoe = shoes[i];
      if(pattern.test(shoe.name)){
        hints.push(shoe);
      }
    }
   //return res.send(results);
  });

   SareeModel.find(function(err,sarees){
    for(var i = 0;i<2;i++){
      var saree = sarees[i];
      if(pattern.test(saree.name)){
        hints.push(saree); 
      }
    }
   //return res.send(results);
  });

  KurtiModel.find(function(err,kurtis){
    for(var i = 0;i<2;i++){
      var kurti = kurtis[i];
      if(pattern.test(kurti.name)){
        hints.push(kurti);
      }
    }
  // return res.send(results);
  });

  SandleModel.find(function(err,sandles){
    for(var i = 0;i<2;i++){
      var sandle = sandles[i];
      if(pattern.test(sandle.name)){
        hints.push(sandle);
      }
    }
  // return res.send(results);
  });
  
   BoyModel.find(function(err,boys){
    for(var i = 0;i<2;i++){
      var boy = boys[i];
      if(pattern.test(boy.name)){
        hints.push(boy);
      }
    }
  // return res.send(results);
  });

  GirlModel.find(function(err,girls){
    for(var i = 0;i<2;i++){
      var girl = girls[i];
      if(pattern.test(girl.name)){
        hints.push(girl);
      }
    }
   return res.send(hints);
  });

 // return res.send(results);
 
});

module.exports = router;
