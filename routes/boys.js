var BoyModel = require('../models/boy');
var express = require('express');
var router = express.Router();

router.route('/api/boys').get(function (req, res){
  return BoyModel.find(function (err, boys) {
    if (!err) {
      return res.send(boys);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/boys').post(function (req, res){
  var boy;
  boy = new BoyModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  boy.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(boy);
});

router.route('/api/boys/:id').delete(function( request, response ) {
	console.log( 'Deleting boy with id: ' + request.params.id );
	return BoyModel.findById( request.params.id, function( err, boy ) {
	return boy.remove( function( err ) {
	  if( !err ) {
	console.log( 'boy removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/boys/:id').put(function( request, response ) {
	console.log( 'Updating boy ' + request.body.name );
	return BoyModel.findById( request.params.id, function( err, boy) {
	boy.image = request.body.image;
	boy.name = request.body.name;
	boy.price = request.body.price;
	boy.color = request.body.color;
	boy.size = request.body.size;
	boy.available = request.body.available;
	boy.delivery = request.body.delivery;

	return boy.save( function( err ) {
	  if( !err ) {
	  console.log( 'boy updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send(boy);
	});
	});
});

module.exports = router;