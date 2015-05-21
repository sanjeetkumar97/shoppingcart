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

router.route('/api/search').post(function(req,res){
  var stext = req.body.search;
 // var pattern = /+stext+/i;
  var pattern = new RegExp(stext,"i");
  var results = [];

  ShirtModel.find(function(err,shirts){
    for(var i = 0;i<shirts.length;i++){
      var shirt = shirts[i];
      if(pattern.test(shirt.name)){
       // console.log('matching in shirt collection'); 
        results.push(shirt);
      }
    }
  });

  JeansModel.find(function(err,jeanses){
    for(var i = 0;i<jeanses.length;i++){
      var jeans = jeanses[i];
      if(pattern.test(jeans.name)){
       // console.log('matching in jeans collection');
        results.push(jeans);
      }
    }
  // return res.send(results);
  });

  ShoeModel.find(function(err,shoes){
    for(var i = 0;i<shoes.length;i++){
      var shoe = shoes[i];
      if(pattern.test(shoe.name)){
        results.push(shoe);
      }
    }
   //return res.send(results);
  });

   SareeModel.find(function(err,sarees){
    for(var i = 0;i<sarees.length;i++){
      var saree = sarees[i];
      if(pattern.test(saree.name)){
        results.push(saree); 
      }
    }
   //return res.send(results);
  });

  KurtiModel.find(function(err,kurtis){
    for(var i = 0;i<kurtis.length;i++){
      var kurti = kurtis[i];
      if(pattern.test(kurti.name)){
        results.push(kurti);
      }
    }
  // return res.send(results);
  });

  SandleModel.find(function(err,sandles){
    for(var i = 0;i<sandles.length;i++){
      var sandle = sandles[i];
      if(pattern.test(sandle.name)){
        results.push(sandle);
      }
    }
  // return res.send(results);
  });
  
   BoyModel.find(function(err,boys){
    for(var i = 0;i<boys.length;i++){
      var boy = boys[i];
      if(pattern.test(boy.name)){
        results.push(boy);
      }
    }
  // return res.send(results);
  });

  GirlModel.find(function(err,girls){
    for(var i = 0;i<girls.length;i++){
      var girl = girls[i];
      if(pattern.test(girl.name)){
        results.push(girl);
      }
    }
   return res.send(results);
  });

 // return res.send(results);
 
});

module.exports = router;
