var GirlModel = require('../models/girl');
var express = require('express');
var router = express.Router();

router.route('/api/girls').get(function (req, res){
  return GirlModel.find(function (err, girls) {
    if (!err) {
      return res.send(girls);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/girls').post(function (req, res){
  var girl;
  girl = new GirlModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  girl.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(girl);
});

router.route('/api/girls/:id').delete(function( request, response ) {
	console.log( 'Deleting girl with id: ' + request.params.id );
	return GirlModel.findById( request.params.id, function( err, girl) {
	return girl.remove( function( err ) {
	  if( !err ) {
	console.log( 'girl removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/girls/:id').put(function( request, response ) {
	console.log( 'Updating girl ' + request.body.name );
	return GirlModel.findById( request.params.id, function( err, girl) {
		girl.image = request.body.image;
		girl.name = request.body.name;
		girl.price = request.body.price;
		girl.color = request.body.color;
		girl.size = request.body.size;
		girl.available = request.body.available;
		girl.delivery = request.body.delivery;
	return girl.save( function( err ) {
	  if( !err ) {
	  console.log( 'girl updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send(girl);
	});
	});
});

module.exports = router;