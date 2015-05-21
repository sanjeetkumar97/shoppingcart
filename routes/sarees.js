var SareeModel = require('../models/saree');
var express = require('express');
var router = express.Router();

router.route('/api/sarees').get(function (req, res){
  return SareeModel.find(function (err, sarees) {
    if (!err) {
      return res.send(sarees);

    } else {
      return console.log(err);
    }
  });
});

router.route('/api/sarees').post(function (req, res){
  var saree;
 // console.log("POST: ");
 // console.log(req.body);
  saree = new SareeModel({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    size: req.body.size,
    available: req.body.available,
    delivery: req.body.delivery
  });
  saree.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(saree);
});

router.route('/api/sarees/:id').delete(function( request, response ) {
	console.log( 'Deleting saree with id: ' + request.params.id );
	return SareeModel.findById( request.params.id, function( err, saree ) {
	return saree.remove( function( err ) {
	  if( !err ) {
	console.log( 'saree removed' );
	return response.send( '' );
	} else {
	console.log( err );
	}
	});
	});
});

router.route('/api/sarees/:id').put(function( request, response ) {
	console.log( 'Updating saree ' + request.body.name );
	return SareeModel.findById( request.params.id, function( err, saree ) {
	saree.image = request.body.image;
	saree.name = request.body.name;
	saree.price = request.body.price;
	saree.color = request.body.color;
	saree.size = request.body.size;
	saree.available = request.body.available;
	saree.delivery = request.body.delivery;

	return saree.save( function( err ) {
	  if( !err ) {
	  console.log( 'saree updated' );
	  } else {
	  console.log( err );
	  }
	  return response.send( saree );
	});
	});
});

module.exports = router;