var ShirtModel = require('../models/shirt');
var express = require('express');
var router = express.Router();

router.route('/api/shirts').get(function (req, res){
		  return ShirtModel.find(function (err, shirts) {
		    if (!err) {
		      return res.send(shirts);

		    } else {
		      return console.log(err);
		    }
		  });
		});

router.route('/api/shirts').post(function (req, res){
	  var shirt;
	  shirt = new ShirtModel({
	    image: req.body.image,
	    name: req.body.name,
	    price: req.body.price,
	    color: req.body.color,
	    size: req.body.size,
	    available: req.body.available,
	    delivery: req.body.delivery
	  });
	  shirt.save(function (err) {
	    if (!err) {
	      return console.log("created");
	    } else {
	      return console.log(err);
	    }
	  });
	  return res.send(shirt);
});

router.route('/api/shirts/:id').delete(function( request, response ) {
	console.log( 'Deleting shirt with id: ' + request.params.id );
	return ShirtModel.findById( request.params.id, function( err, shirt ) {
	return shirt.remove( function( err ) {
	  if( !err ) {
	console.log( 'Shirt removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/shirts/:id').put(function( request, response ) {
	console.log( 'Updating shirt ' + request.body.name );
	return ShirtModel.findById( request.params.id, function( err, shirt ) {
	shirt.image = request.body.image;
	shirt.name = request.body.name;
	shirt.price = request.body.price;
	shirt.color = request.body.color;
	shirt.size = request.body.size;
	shirt.available = request.body.available;
	shirt.delivery = request.body.delivery;

	return shirt.save( function( err ) {
	  if( !err ) {
	  console.log( 'shirt updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send( shirt );
	});
	});
});


module.exports = router;