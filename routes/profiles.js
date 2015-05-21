var ProfileModel = require('../models/profile');
var express = require('express');
var router = express.Router();

router.route('/api/signup').post(function(req,res){
    console.log("POST: ");
    console.log(req.body);
   var profile = new ProfileModel({
    fname : req.body.fname,
    lname : req.body.lname,
    email: req.body.email,
    pwd: req.body.pone,
    gen:req.body.gen
  });
  profile.save(function(err){
    if(!err){
      return console.log('created');
    }
    else
    {
      return console.log(err);
    }
  });
 return res.send(profile);
});

router.route('/api/profile').get(function(req,res){
  return ProfileModel.find(function(err,profiles){
    if(!err){
      return res.send(profiles);
    } else{
      return console.log(err);
    }
  });
});

router.route('/api/profile/:id').get(function(req,res){
  return ProfileModel.findById(req.params.id, function(err,profile){
    if(!err){
      console.log(profile.fname);
      return res.send(profile);
    }
    else{
      return console.log(err);
    }
  });
});

router.route('/api/profile/:id').put(function( request, response ) {
return ProfileModel.findById( request.params.id, function( err, profile ) {
//console.log(request.params.id);
//console.log("the cart Item is"+ request.body.cartItem);
profile.cartItems.push(request.body.cartItem);
return profile.save( function( err ) {
  if( !err ) {
  console.log( 'profile updated' );
  } else {
  console.log( err );
  }
  //console.log(profile.cartItems);
  return response.send(profile.cartItems);
});
});
});

router.route('/api/cartItems/:id').get(function(req,res){
  return ProfileModel.findById(req.params.id,function(err,profile){
      return profile.save( function( err ) {
        if( !err ) {
        console.log( 'carts sent' );
        } else {
        console.log( err );
        }
       // console.log(profile.cartItems);
        return res.send(profile.cartItems);
      });
  });
});

router.route('/api/cartItemDelete/:id').put(function( request, response ) {
  return ProfileModel.findById( request.params.id, function( err, profile ) {
    var ci = profile.cartItems;
    //console.log(profile.cartItems);
    //console.log(request.body.itemId);
    var matchedIndex;
  for(var i=0;i<ci.length;i++){
    var c = ci[i];
    if(c.itemId === request.body.itemId){
      matchedIndex = i;
      console.log('matching');
    }
  }
  profile.cartItems.splice(matchedIndex,1);

    return profile.save( function( err ) {
      if( !err ) {
      console.log( 'profile updated' );
      } else {
      console.log( err );
      }
     // console.log(profile.cartItems);
      return response.send(profile.cartItems);
    });
  });
});

router.route('/api/login').post(function(req,res){
//res.header('Access-Control-Allow-Origin', '*');
  ProfileModel.find(function(err,profiles){
  
          for(var i = 0;i<profiles.length;i++){
            var profile = profiles[i];
            if(profile.email == req.body.email && profile.pwd == req.body.pwd){
              console.log('login successfull');
              console.log(profile.email);
              return res.send({
                userId:profile._id,
                fname:profile.fname,
                lname:profile.lname,
                email:profile.email,
                pwd:''
              });
            }

          }
          return res.send({email:''});
  });
  //console.log(req.body.email);
});

module.exports = router;