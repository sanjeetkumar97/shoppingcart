var ShoeModel = require('../models/shoe');
var express = require('express');
var router = express.Router();

router.route('/api/shoes').get(function (req, res){
  return ShoeModel.find(function (err, shoes) {
    if (!err) {
      return res.send(shoes);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/shoes').post(function (req, res){
  var shoe;
  shoe = new ShoeModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  shoe.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(shoe);
});

router.route('/api/shoes/:id').delete(function( request, response ) {
	console.log( 'Deleting shoe with id: ' + request.params.id );
	return ShoeModel.findById( request.params.id, function( err, shoe ) {
	return shoe.remove( function( err ) {
	  if( !err ) {
	console.log( 'Shoe removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/shoes/:id').put(function( request, response ) {
	console.log( 'Updating shoe ' + request.body.name );
	return ShoeModel.findById( request.params.id, function( err, shoe) {
	shoe.image = request.body.image;
	shoe.name = request.body.name;
	shoe.price = request.body.price;
	shoe.color = request.body.color;
	shoe.size = request.body.size;
	shoe.available = request.body.available;
	shoe.delivery = request.body.delivery;

	return shoe.save( function( err ) {
	  if( !err ) {
	  console.log( 'shoe updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send(shoe);
	});
	});
});

module.exports = router;