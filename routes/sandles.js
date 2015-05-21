var SandleModel = require('../models/sandle');
var express = require('express');
var router = express.Router();

router.route('/api/sandles').get(function (req, res){
  return SandleModel.find(function (err, sandles) {
    if (!err) {
      return res.send(sandles);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/sandles').post(function (req, res){
  var sandle;
  sandle = new SandleModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  sandle.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(sandle);
});

router.route('/api/sandles/:id').delete(function( request, response ) {
	console.log( 'Deleting sandle with id: ' + request.params.id );
	return SandleModel.findById( request.params.id, function( err, sandle) {
	return sandle.remove( function( err ) {
	  if( !err ) {
	console.log( 'sandle removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/sandles/:id').put(function( request, response ) {
	console.log( 'Updating sandle ' + request.body.name );
	return SandleModel.findById( request.params.id, function( err,sandle) {
		sandle.image = request.body.image;
		sandle.name = request.body.name;
		sandle.price = request.body.price;
		sandle.color = request.body.color;
		sandle.size = request.body.size;
		sandle.available = request.body.available;
		sandle.delivery = request.body.delivery;
	return sandle.save( function( err ) {
	  if( !err ) {
	  console.log( 'sandle updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send(sandle);
	});
	});
});

module.exports = router;