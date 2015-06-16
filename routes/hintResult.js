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

//---------------------------------------------

router.route('/api/hintResult/:id').get(function(req,res){
  var shint = req.params.id;
  console.log(shint);
 
  ShirtModel.find(function(err,shirts){
    for(var i = 0;i<shirts.length;i++){
      var shirt = shirts[i];
      if(shirt._id == shint){ 
        return res.send(shirts);
      }
    }
  });

  JeansModel.find(function(err,jeanses){
    for(var i = 0;i<jeanses.length;i++){
      var jeans = jeanses[i];
      if(jeans._id == shint){
        return res.send(jeanses);
      }
    }
  });

 ShoeModel.find(function(err,shoes){
    for(var i = 0;i<shoes.length;i++){
      var shoe = shoes[i];
      if(shoe._id == shint){
        return res.send(shoes);
      }
    }
  });

 SareeModel.find(function(err,sarees){
    for(var i = 0;i<sarees.length;i++){
      var saree = sarees[i];
      if(saree._id == shint){
        return res.send(sarees);
      }
    }
  });

 KurtiModel.find(function(err,kurtis){
    for(var i = 0;i<kurtis.length;i++){
      var kurti = kurtis[i];
      if(kurti._id == shint){
        return res.send(kurtis);
      }
    }
  });

 SandleModel.find(function(err,sandles){
    for(var i = 0;i<sandles.length;i++){
      var sandle = sandles[i];
      if(sandle._id == shint){
        return res.send(sandles);
      }
    }
  });
 
 BoyModel.find(function(err,boys){
    for(var i = 0;i<boys.length;i++){
      var boy = boys[i];
      if(boy._id == shint){
        return res.send(boys);
      }
    }
  });

 GirlModel.find(function(err,girls){
    for(var i = 0;i<girls.length;i++){
      var girl = girls[i];
      if(girl._id == shint){
        return res.send(girls);
      }
    }
  });

});

module.exports = router;
